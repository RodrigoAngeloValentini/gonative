import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { colors, fonts } from 'styles';
import styles from './styles';

class MiniCalendar extends Component {
  state = { toDay: moment() };

  newDate = (day) => {
    const { toDay } = this.state;
    const newDate = moment(toDay)
      .add(day, 'days')
      .format('YYYY-MM-DD');
    this.setState({ toDay: newDate });
  };

  formatDateBR = date => moment(date).format('LL');

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCalendar}>
          <TouchableOpacity id="addDate" style={styles.iconLeft} onPress={() => this.newDate(-1)}>
            <Icon name="angle-left" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.mid}>
            <TouchableOpacity onPress={() => {}} style={styles.containerTitle}>
              <Text style={styles.title}>
                {this.formatDateBR(this.state.toDay)}
              </Text>
              <Icon name="angle-double-down" size={fonts.big} color={colors.green} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity id="subDate" style={styles.iconRight} onPress={() => this.newDate(1)}>
            <Icon name="angle-right" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>
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
)(MiniCalendar);
