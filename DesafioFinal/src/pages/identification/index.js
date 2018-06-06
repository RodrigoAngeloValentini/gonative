import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import PropTypes from 'prop-types';

import { NavigationActions } from 'react-navigation';

import { View, Text, Keyboard } from 'react-native';

import Btn from 'pages/components/btn';
import Input from 'pages/components/input';
import Notification from 'pages/components/notification';

import { connect } from 'react-redux';
import LoginActions from 'redux/ducks/login';

import styles from './styles';

class Identification extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    login: PropTypes.shape({
      isRegistered: PropTypes.bool,
      isAuthorized: PropTypes.bool.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
    }).isRequired,
    ux: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    checkPhone: PropTypes.func.isRequired,
  };

  state = { phone: '' };

  componentWillMount() {
    // console.tron.log(this.props);
  }

  componentDidUpdate() {
    if (this.props.login.isRegistered === true) {
      this.props.navigation.dispatch(this.navitagionTo('Login'));
    }
    if (this.props.login.isRegistered === false) {
      this.props.navigation.dispatch(this.navitagionTo('Register'));
    }
  }

  navitagionTo = routeName =>
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });

  checkAndFindPhone = () => {
    Keyboard.dismiss();
    this.props.checkPhone(this.state.phone);
  };

  render() {
    return (
      <View style={styles.container}>
        <Notification />
        <Text style={styles.title}>Scheduler</Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={phone =>
            this.setState({
              phone: VMasker.toPattern(phone, '(99)9999-99999999'),
            })
          }
          value={this.state.phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Btn
          title="Verificar"
          link={this.checkAndFindPhone}
          loading={this.props.ux.loading}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  ux: state.ux,
  login: state.login,
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  checkPhone: phone => dispatch(LoginActions.loginPhoneCheck(phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Identification);
