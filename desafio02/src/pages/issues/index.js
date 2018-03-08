import React, { Component } from 'react';
import { Button, View, Text, ActivityIndicator, AsyncStorage, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';

import IssueItem from './components/IssueItem';
import Filter from './components/Filter';
import { api } from 'services';
import styles from './styles';

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  state = {
    loading: false,
    refreshing: false,
    filterType: 'all',
    issues: [],
  };

  componentDidMount() {
    this.getFilterFromStorage();
    this.getIssues();
  }

  getFilterFromStorage = () => {
    AsyncStorage.getItem('@desafio2:filter').then((result) => {
      this.setState({ filterType: result || 'all' });
    });
  };

  refreshIssues = () => {
    this.setState({ refreshing: true });
    this.getIssues();
  };

  getIssues = async () => {
    this.setState({ loading: true });
    const { name, login } = this.props.navigation.state.params;
    const { filterType } = this.state;

    const response = await api.get(`/repos/${login}/${name}/issues?state=${filterType}`);

    const result = response.data;

    let issues = [];
    if (Array.isArray(result)) {
      issues = result.map(issue => ({
        id: issue.id,
        url: issue.url,
        title: issue.title,
        login: issue.user.login,
        avatar_url: issue.user.avatar_url,
      }));
    }

    this.setState({
      issues,
      loading: false,
      refreshing: false,
    });
  };

  filterBy = (filterType) => {
    this.setState({ filterType }, () => {
      AsyncStorage.setItem('@desafio2:filter', filterType).then(() => {
        this.getIssues();
      });
    });
  };

  renderIssues = () => (
    <View>
      <Filter filterType={this.state.filterType} filterBy={this.filterBy} />
      <FlatList
        data={this.state.issues}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <IssueItem issue={item} />}
        onRefresh={this.refreshIssues}
        refreshing={this.state.refreshing}
      />
    </View>
  );

  renderLoading = () => {
    if (this.state.loading) {
      return <ActivityIndicator size="small" color="#999" style={styles.loading} />;
    }
  };

  renderEmpty = () => {
    if (!this.state.loading) {
      return (
        <View style={styles.containerInfo}>
          <Text style={styles.info}>Nenhuma Issue encontrada.</Text>
        </View>
      );
    }
  };

  renderList = () =>
    (this.state.issues.length && !this.state.loading ? this.renderIssues() : this.renderEmpty());

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>{this.renderLoading()}</View>
        <View style={styles.containerList}>{this.renderList()}</View>
      </View>
    );
  }
}

export default withNavigation(Issues);
