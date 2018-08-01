import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Keyboard } from 'react-native';

import Button from 'components/button';
import Input from 'components/input';

import { connect } from 'react-redux';

import styles from './styles';

class Register extends Component {
  static navigationOptions = { header: null };

  state = {
    phone: '',
    name: '',
    password: '',
  };

  register = () => {
    Keyboard.dismiss();
  };

  render() {
    const { phone, name, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
Scheduler
        </Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={value => this.setState({ phone: value })}
          value={phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Input
          title="Nome Completo"
          icon="user"
          onChangeText={value => this.setState({ name: value })}
          value={name}
          keyboardType="default"
          color="purple"
        />
        <Input
          title="Sua senha secreta"
          icon="lock"
          onChangeText={value => this.setState({ password: value })}
          value={password}
          keyboardType="default"
          color="purple"
          secureTextEntry
        />
        <Button title="Criar uma contra grátis" onPress={this.register} loading={false} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
