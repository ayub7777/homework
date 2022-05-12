//условие 

// 2 == 2 - сравнивает наши значение между двумя элементами - не строгое сравнение
//2 === 2 - сравнивает наши значение и типы данных между двумя элементами - строгое сравнение

// if(1 == 1){
//     console.log('привет');
// }else{
//     console.log('пока');
// }

// var a = prompt('Введите слово Привет')

// if(a == 'Привет'){
//     console.log('good');
// }else{
//     console.log('bad');
// }


// var x = +prompt('Enter your rating')

// if(x === 5){
//     console.log('well done');
// }else if(x == 4){
//     console.log('great'); 
// }else if(x == 3){
//     console.log('good');
// }else{
//     console.log('bad');
// }




// var secret = prompt('Entering secret word')

// if(secret == 'admin' || secret == 'админ' || secret == 'muhammadayubkhan'){
//     console.log('Access is open');
// }else{
//     console.log('Access is closed');
// }


//    || - оператор 'или'
//    && - оператор  'и'
//    !  - оператор  'не' - ставиться перед значением или функцией - возваращает противоположенное значение 
//    isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе  false 

// var a = +prompt('введите первое число')
// var b = +prompt('введите второе число')

// // if(a > b && !isNaN(a) && !isNaN(b)){
// //     console.log(a + ' больше ' + b );
// // }else if(b > a && !isNaN(a) && !isNaN(b)){
// //     console.log(b + ' больше ' + a );
// // }else if(b == a && !isNaN(a) && !isNaN(b)){
// //     console.log(a + ' равно ' + b );
// // }else {
// //     console.log('вы ввели не числа');
// // }


// var num = +prompt('Введите день недели')


// if(num == 1>19){
//     alert('119')
// }else if(num == 19>50){
//     alert('1950')
// }else if(num == 50>59){
//     alert('5059')
// }

// var num = +prompt('Введите день недели')

// switch (num) {
//     case 1:
//         alert('monday')
//         break;
//     case 2:
//         alert('tuesday')
//         break;
//     case 3:
//         alert('thursday')
//         break;
//     case 4:
//         alert('wednesday')
//         break;
//     default:
//         alert('has not this day of week')
//         break;
// }


// if(5 === 7){
//     console.log('good');
// }else{
//     console.log('bad');
// }


// var x = 5 === 5 ? 'good' : 'bad'
// console.log(x);



// var num && !isNaN={} = +prompt('Введите свой возраст')


// switch (num) {
//     case 0>18:
//         alert('вы ещё молоды')
//         break;
//     case 18>50:
//         alert('вам нужно работать')
//         break;
//     case 50>59:
//         alert('вам скоро на пенсию')
//         break;
//     case 59>150:
//         alert('вы уже на пенсии')
//         break;
//     default:
//         alert('ups nono')
//         break;
// }



// var 0>18 || 18>50 = +prompt('Введите свой возраст')

// if(0>18){
//     alert('вы ещё молоды')
// }else if(18>50){
//     alert('вам нужно работать')
// }else{
//     alert('yoq')
// }
    


var x = +prompt('введите вашу возраст')

if(x >= 1 && x <= 19){
    alert('вы ещё молоды,вы должны учиться')
}else if(x >= 19 && x <= 50){
    alert('вам нужно работать')
}else if(x >= 50 && x <= 59){
    alert('вам скоро на пенсию')
}else if(x >= 59 && x <= 150){
    alert('вы на уже на пенсии')
}else{
    ('что то пошло не так')
}