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

class Identification extends Component {
  static navigationOptions = { header: null };

  state = { phone: '' };

  componentDidUpdate() {
    if (this.props.userExist === true) {
      this.props.navigation.replace('Login');
    }
    if (this.props.userExist === false) {
      this.props.navigation.replace('Register');
    }
  }

  verify = () => {
    Keyboard.dismiss();

    const { phone } = this.state;
    const { phoneVerifyRequest } = this.props;

    phoneVerifyRequest(phone.replace(/\D/g, ''));
  };

  render() {
    const { loading } = this.props;
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
            phone: maskPhone(value),
          })
          }
          value={phone}
          keyboardType="phone-pad"
          color="purple"
        />
        <Button title="Verificar" onPress={this.verify} loading={loading} />
      </View>
    );
  }
}

Identification.defaultProps = {
  userExist: undefined,
};

Identification.propTypes = {
  loading: PropTypes.bool.isRequired,
  phoneVerifyRequest: PropTypes.func.isRequired,
  userExist: PropTypes.oneOf([true, false, null]),
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  userExist: state.user.userExist,
  phone: state.user.phone,
});

const mapDispatchToProps = dispatch => ({
  phoneVerifyRequest: phone => dispatch(UserActions.phoneVerifyRequest(phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Identification));
