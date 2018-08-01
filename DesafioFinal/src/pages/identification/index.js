import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Keyboard } from 'react-native';

import Button from 'components/button';
import Input from 'components/input';

import { connect } from 'react-redux';

import styles from './styles';

class Identification extends Component {
  static navigationOptions = { header: null };

  state = { phone: '' };

  checkAndFindPhone = () => {
    Keyboard.dismiss();
  };

  render() {
    const { phone } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
Scheduler
        </Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={value => this.setState({
            phone: value,
          })
          }
          value={phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Button title="Verificar" onPress={this.checkAndFindPhone} loading={false} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Identification);
