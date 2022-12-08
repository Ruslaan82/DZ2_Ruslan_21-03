
let day = prompt('Выберите день недели')

switch (day){
        case "Monday":
        case "monday":
        console.log('Понедельник')
        break
    case "Tuesday":
    case "tuesday":
        console.log('Вторник')
        break
    case "Wednesday":
    case "wednesday":
        console.log('Среда')
        break
    case "Thursday":
    case "thursday":
        console.log('Четверг')
        break
    case "Friday":
    case "friday":
        console.log('Пятница')
        break
    case "Saturday":
    case "saturday":
        console.log('Суббота')
        break
    case "Sunday":
    case "sunday":
        console.log('Воскресенье')
        break
    default:
        console.log('Попробуй еще раз!!!')
}

// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case  6:
//         day = "Saturday";
// }
