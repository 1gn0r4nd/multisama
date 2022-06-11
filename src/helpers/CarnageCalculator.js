import moment from 'moment';
// import Moment from 'react-moment';

function getLastSunday() {
    // const today = new Date();
    // const first = today.getDate() - today.getDay() + 1;
    // const last = first -1;
    // const sunday = new Date(today.setDate(last));
    // return sunday;
    const currentDateTime = moment();
    return currentDateTime.day(-7);
}

function formatDate(input_date){
    return input_date.format('YYYY-MM-DD');
}

export { getLastSunday, formatDate };