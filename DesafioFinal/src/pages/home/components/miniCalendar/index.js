import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { Creators as CalendarActions } from 'store/ducks/calendar';

import { colors, fonts } from 'styles';
import { formatDateBR, addDays } from 'helpers/dateFunctions';
import styles from './styles';

class MiniCalendar extends Component {
  changeDate = (days) => {
    const { date } = this.props;
    const newDate = addDays(date, days);
    this.props.changeDateCalendar(newDate);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCalendar}>
          <TouchableOpacity
            id="addDate"
            style={styles.iconLeft}
            onPress={() => this.changeDate(-1)}
          >
            <Icon name="angle-left" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.mid}>
            <TouchableOpacity
              onPress={() => {
                this.props.hideMiniCalendar();
              }}
              style={styles.containerTitle}
            >
              <Text style={styles.title}>{formatDateBR(this.props.date)}</Text>
              <Icon name="angle-double-down" size={fonts.big} color={colors.green} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            id="subDate"
            style={styles.iconRight}
            onPress={() => this.changeDate(1)}
          >
            <Icon name="angle-right" size={fonts.bigger} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MiniCalendar.propTypes = {
  hideMiniCalendar: PropTypes.func.isRequired,
  changeDateCalendar: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  date: state.calendar.date,
});

const mapDispatchToProps = dispatch => ({
  hideMiniCalendar: () => dispatch(CalendarActions.hideMiniCalendar()),
  changeDateCalendar: newDate => dispatch(CalendarActions.changeDateCalendar(newDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MiniCalendar);
