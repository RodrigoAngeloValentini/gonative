import moment from 'moment';
import 'moment/locale/pt-br';

export const momentNow = () => moment().format('YYYY-MM-DD');

export const formatDateBR = date => moment(date, 'YYYY-MM-DD').format('LL');

export const addDays = (date, day) =>
  moment(date, 'YYYY-MM-DD')
    .add(day, 'days')
    .format('YYYY-MM-DD');
