import moment from 'moment'

class Date {
    static dateFormat(date) {
        return moment(date, 'YYYY-MM-DD').format('DD/MM/YY h:mm:ss')
    }
}

export default Date