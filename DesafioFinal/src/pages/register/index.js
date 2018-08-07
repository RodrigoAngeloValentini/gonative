import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  View, Text, Keyboard, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Button from 'components/button';
import Input from 'components/input';

import { connect } from 'react-redux';
import { Creators as UserActions } from 'store/ducks/user';

import { maskPhone } from 'helpers/maskPhone';
import styles from './styles';

class Register extends Component {
  static navigationOptions = { header: null };

  state = {
    phone: maskPhone(this.props.phone) || '',
    name: '',
    password: '',
  };

  componentDidUpdate() {
    const { userRegister } = this.props;
    if (userRegister) {
      this.props.navigation.replace('Login');
    }
  }

  backToLogin = () => {
    this.props.navigation.replace('Login');
  };

  register = () => {
    Keyboard.dismiss();
    const { phone, name, password } = this.state;

    this.props.userRegisterRequest(phone.replace(/\D/g, ''), name, password);
  };

  render() {
    const { phone, name, password } = this.state;
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
Scheduler
        </Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={value => this.setState({ phone: maskPhone(value) })}
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
        <Button
          title="Criar uma contra grátis"
          onPress={this.register}
          loading={loading}
          disabled={loading}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={this.backToLogin}>
          <Text style={styles.backTitle}>
            {' '}
Mas... eu já tenho uma conta.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Register.defaultProps = {
  userRegister: undefined,
};

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  userRegisterRequest: PropTypes.func.isRequired,
  userRegister: PropTypes.oneOf([true, false, null]),
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  phone: state.user.phone,
  userRegister: state.user.userRegister,
});

const mapDispatchToProps = dispatch => ({
  userRegisterRequest: (phone, name, password) => {
    dispatch(UserActions.userRegisterRequest(phone, name, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Register));
