var weekDay = document.getElementsByClassName('week-day');
let inner = weekDay.innerHTML
function returnWeekday() {
    let string = '今天是星期'
    let date = new Date().getDay()

    dateObject={
        0:['日','休'],
        1:['一','日'],
        2:['二','日'],
        3:['三','日'],
        4:['四','日'],
        5:['五','日'],
        6:['六','休'],
    }
    weekDay.innerHTML = string + dateObject[date][0]
    // dayType = {
    //     '休':function() {
    //         weekDay.innerHTML = string + dateObject.date[0]
    //     },
    //     '日': function() {
    //         weekDay.innerHTML = string + dateObject.date[0]
    //     }
    // }
    // let returnDate = {
    //     'string' :string + dateObj[date][0],
    //     'method' : dayType[dateObj[date][1]]
    // }
    // return returnDate
}
returnWeekday()
