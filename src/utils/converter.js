export function convertDate () {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    let updatedMonth;
    let updatedDay;

    if (month + 1 < 10) {
        updatedMonth = `0${month + 1}`;
    } else {
        updatedMonth = month + 1;
    }

    if (day < 10) {
        updatedDay = `0${day}`;
    } else {
        updatedDay = day;
    }

    return `${year}-${updatedMonth}-${updatedDay}`;
}