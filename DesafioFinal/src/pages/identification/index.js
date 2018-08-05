import React, { Component } from 'react';
import VMasker from 'vanilla-masker';
import PropTypes from 'prop-types';

import { View, Text, Keyboard } from 'react-native';

import Button from 'components/button';
import Input from 'components/input';
import Notification from 'components/notification';

import { connect } from 'react-redux';
import { Creators as UserActions } from 'store/ducks/user';

import styles from './styles';

class Identification extends Component {
  static navigationOptions = { header: null };

  state = { phone: this.props.phone };

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
        <Notification />
        <Text style={styles.title}>
Scheduler
        </Text>
        <Input
          title="Seu número de telefone"
          icon="phone"
          onChangeText={value => this.setState({
            phone: VMasker.toPattern(value, '(99)99999-9999'),
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

Identification.propTypes = {
  loading: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  phoneVerifyRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  phone: state.user.phone,
});

const mapDispatchToProps = dispatch => ({
  phoneVerifyRequest: phone => dispatch(UserActions.phoneVerifyRequest(phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Identification);
