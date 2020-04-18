import moment from 'moment';

export default class DateHelper {
    static format(
        date: moment.MomentInput,
        format: string = 'DD MMM YYYY'
    ): string {
        return !moment(date).isValid() ? '-' : moment(date).format(format);
    }

    static getMonthName(month: number): string {
        return moment.months()[month - 1];
    }
}
