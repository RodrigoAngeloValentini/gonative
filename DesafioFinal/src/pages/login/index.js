import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';

import Button from 'components/button';
import Input from 'components/input';

import { connect } from 'react-redux';
import { Creators as UserActions } from 'store/ducks/user';

import { maskPhone } from 'helpers/maskPhone';
import styles from './styles';

class Login extends Component {
  static navigationOptions = { header: null };

  state = { phone: maskPhone(this.props.phone), password: '' };

  componentDidUpdate() {
    if (this.props.userAuth) {
      this.props.navigation.replace('Home');
    }
  }

  login = () => {
    Keyboard.dismiss();

    const { phone, password } = this.state;
    this.props.userAuthRequest(phone.replace(/\D/g, ''), password);
  };

  render() {
    const { phone, password } = this.state;
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
Scheduler
        </Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={value => this.setState({
            phone: maskPhone(value),
          })
          }
          value={phone}
          keyboardType="phone-pad"
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
        <Button title="Entrar" onPress={this.login} loading={loading} disabled={loading} />
        <Text style={styles.recovery}>
          {' '}
Esqueceu a senha ? Que pena ...
        </Text>
      </View>
    );
  }
}

Login.defaultProps = {
  userAuth: undefined,
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  userAuth: PropTypes.oneOf([true, false, null]),
  userAuthRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  phone: state.user.phone,
  userAuth: state.user.userAuth,
});

const mapDispatchToProps = dispatch => ({
  userAuthRequest: (phone, password) => {
    dispatch(UserActions.userAuthRequest(phone, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Login));
