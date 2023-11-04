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

export const getDateAndMonth = (date: Moment) => {
  return `${moment(date).get('d')} ${MONTH[moment(date).get('month') - 1]}`;
};

export const isDateEqual = (date1: Moment, date2: Moment) => {
  return date1 === date2;
};
