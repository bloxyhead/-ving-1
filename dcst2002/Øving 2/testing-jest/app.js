export function isLeapYear(year) {
    if (typeof year !== 'number' || year < 0) {
        throw new Error('Invalid argument: year must be an integer equal to or larger than 0');
    }

    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}
