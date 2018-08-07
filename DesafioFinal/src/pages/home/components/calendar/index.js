import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Calendar as CalendarReact, LocaleConfig } from 'react-native-calendars';

import { connect } from 'react-redux';
import { Creators as CalendarActions } from 'store/ducks/calendar';

import { colors } from 'styles';
import styles from './styles';

class Calendar extends Component {
  changeDate = (date) => {
    this.props.changeDateCalendar(date.dateString);
  };

  returnMarkedDates = () => {
    const { date } = this.props;
    const obj = {};
    obj[date] = { marked: true, selected: true };
    return obj;
  };

  render() {
    LocaleConfig.locales.bra = {
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul.',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dec',
      ],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    };

    LocaleConfig.defaultLocale = 'bra';

    return (
      <CalendarReact
        style={styles.container}
        theme={{
          calendarBackground: colors.purpleDark,
          textSectionTitleColor: colors.white,
          selectedDayBackgroundColor: colors.green,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.white,
          dayTextColor: colors.white,
          textDisabledColor: colors.purple,
          dotColor: colors.green,
          selectedDotColor: colors.white,
          arrowColor: colors.white,
          monthTextColor: colors.white,
        }}
        markedDates={this.returnMarkedDates()}
        onDayPress={day => this.changeDate(day)}
        monthFormat="MMMM"
        onMonthChange={month => console.log('month changed', month)}
        hideArrows={false}
        hideExtraDays={false}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
      />
    );
  }
}

Calendar.propTypes = {
  changeDateCalendar: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  date: state.calendar.date,
});

const mapDispatchToProps = dispatch => ({
  changeDateCalendar: newDate => dispatch(CalendarActions.changeDateCalendar(newDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
