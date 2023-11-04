import moment, {Moment} from 'moment';
export const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
export const FULL_MONTH_NAME = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDateAndMonth = (date: Moment) => {
  return `${moment(date).get('d')} ${MONTH[moment(date).get('month') - 1]}`;
};

export const isDateEqual = (date1: Moment, date2: Moment) => {
  return date1 === date2;
};

export const getDate = () => {
  var startOfWeek = moment().startOf('month');
  var endOfWeek = moment().endOf('month');

  var days: Moment[] = [];
  var day = startOfWeek;

  while (day <= endOfWeek) {
    days.push(day);
    day = day.clone().add(1, 'd');
  }
  return days;
};
