import moment from 'moment';
import 'moment/locale/pt-br';

export const momentNow = () => moment().format('YYYY-MM-DD');

export const formatDateBR = date => moment(date, 'YYYY-MM-DD').format('LL');

export const formatTime = date => moment(date).format('H:mm');

export const isSameDate = (date1, date2) =>
  moment(date1, 'YYYY-MM-DD').format('YYYY-MM-DD') ===
  moment(date2, 'YYYY-MM-DD H:mm:ss').format('YYYY-MM-DD');

export const addDays = (date, day) =>
  moment(date, 'YYYY-MM-DD')
    .add(day, 'days')
    .format('YYYY-MM-DD');
