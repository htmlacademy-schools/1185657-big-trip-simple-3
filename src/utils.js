import dayjs from 'dayjs';

const humanizePointEditorDueDate = (date) => dayjs(date).format('DD/MM/YY HH:mm');
const humanizePointDueDate = (date) => dayjs(date).format('MMM DD');
const getDateForDateTimeWithoutTime = (date) => dayjs(date).format('YYYY-MM-DD');
const getDateForDateTimeWithTime = (date) => dayjs(date).format('YYYY-MM-DDTHH:mm');
const getTimeForDateWithoutDate = (date) => dayjs(date).format('HH:mm');

export { humanizePointEditorDueDate, humanizePointDueDate, getDateForDateTimeWithoutTime,
  getDateForDateTimeWithTime, getTimeForDateWithoutDate };
