import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Keyboard } from 'react-native';

import Button from 'components/button';
import Input from 'components/input';

import { connect } from 'react-redux';

import styles from './styles';

class Profile extends Component {
  state = { name: '', password: '', passwordConfirmation: '' };

  updateProfile = () => {
    Keyboard.dismiss();
  };

  render() {
    const { name, password, passwordConfirmation } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
Minha Conta
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            title="Nome Completo"
            icon="user"
            onChangeText={value => this.setState({ name: value })}
            value={name}
            keyboardType="default"
            color="purple"
          />
          <Input
            title="Quer alterar sua senha?"
            icon="lock"
            onChangeText={value => this.setState({ password: value })}
            value={password}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Input
            title="Confirme a senha digitada"
            icon="lock"
            onChangeText={value => this.setState({ passwordConfirmation: value })}
            value={passwordConfirmation}
            keyboardType="default"
            color="purple"
            secureTextEntry
          />
          <Button title="Alterar informações" onPress={this.updateProfile} loading={false} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
