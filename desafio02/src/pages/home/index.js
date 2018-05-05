import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RepositoryItem from './components/RepositoryItem';
import { api } from 'services';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: false,
    refreshing: false,
    repositories: [],
    repositoryName: '',
  };

  componentDidMount(){
    this.getRepositoriesFromStorage();
  };

  getRepositoriesFromStorage = () => {
    AsyncStorage.getItem('@desafio2:repositories').then((result) => {
      this.setState({ repositories: JSON.parse(result) || [], refreshing: false });
    });
  };

  refreshRepositories = () => {
    this.setState({ refreshing: true });
    this.getRepositoriesFromStorage();
  };

  getRepo = async () => {
    if (!this.state.repositoryName.length) {
      console.log('Repositório não preenchido');
      throw Error;
    }

    const found = this.state.repositories.find(item => item.full_name === this.state.repositoryName);
    if (found) {
      console.log('Repositório já existe');
      throw Error;
    }

    const response = await api.get(`/repos/${this.state.repositoryName}`);
    console.log(response);

    if (!response.ok) {
      console.log('Repositório inválido');
      throw Error;
    }

    const result = response.data;
    return {
      id: result.id,
      name: result.name,
      login: result.owner.login,
      full_name: result.full_name,
      avatar_url: result.owner.avatar_url,
    };
  };

  addRepository = () => {
    this.setState({ loading: true });
    this.getRepo()
      .then((result) => {
        this.setState({
          loading: false,
          repositories: [...this.state.repositories, result],
          repositoryName: '',
        });

        AsyncStorage.setItem('@desafio2:repositories', JSON.stringify(this.state.repositories));
      })
      .catch(({ message }) => {
        this.setState({ loading: false });
      });
  };

  renderRepositories = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      onRefresh={this.refreshRepositories}
      refreshing={this.state.refreshing}
    />
  );

  renderLoading = () => {
    if (this.state.loading) {
      return <ActivityIndicator size="small" color="#999" style={styles.loading} />;
    }
  };

  renderEmpty = () => {
    if (!this.state.loading) {
      return <Text style={styles.info}>Nenhum repositório existente.</Text>;
    }
  };

  renderList = () =>
    (this.state.repositories.length && !this.state.loading
      ? this.renderRepositories()
      : this.renderEmpty());

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar repositório"
            underlineColorAndroid="rgba(0,0,0,0)"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.repositoryName}
            onChangeText={repositoryName => this.setState({ repositoryName })}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.addRepository}>
            <Icon name="plus" size={16} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerLoading}>{this.renderLoading()}</View>
        <View style={styles.containerList}>{this.renderList()}</View>
      </View>
    );
  }
}
