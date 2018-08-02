import React, { Component } from 'react';
import moment from 'moment';

import { Calendar as CalendarReact, LocaleConfig } from 'react-native-calendars';

import { connect } from 'react-redux';

import { colors } from 'styles';
import styles from './styles';

class Calendar extends Component {
  state = { today: moment().format('YYYY-MM-DD') };

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
          todayTextColor: colors.green,
          dayTextColor: colors.white,
          textDisabledColor: colors.purple,
          dotColor: colors.green,
          selectedDotColor: colors.green,
          arrowColor: colors.white,
          monthTextColor: colors.white,
        }}
        markedDates={{}}
        onDayPress={() => {}}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
