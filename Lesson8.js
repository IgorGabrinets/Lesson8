//условное ветвление

// if(условие){
//     действие 1;
// }
// else if(условие 2){
//     действие 2;
// }
// else if(условие 3){
//     действие 3;
// }
// else{
//     иное;
// }

//let number = Number(prompt('Enter the number'));
//let bool = True;

//if(number > 0){
//    console.log('number > 0');
//}
//else if(number < 0);
//console.log('number< 0');
//else{
//    console.log('number = 0');
//}

//if(0){
//
//}

//let num1 = 123;
//let num2 = '123';
//
//if(num1 == num2){
//    console.log('yes');
//}

// Задача.  
// Написать программу, 
// которая получает два числа 
// и выводит наибольшее.

//  let num1 = Number(prompt('Enter your f*king number 1'));
//  let num2 = Number(prompt('Enter your f*king number 2'));
//  if(num1 > num2){
//      console.log(num1 + 'your f*king number is then ');  
//  }
//  else{
//      console.log(num2);
//  }

// Написать программу, 
// которая считывает два числа через prompt 
// и выводит одну из строку “первое число больше второго”, 
// “второе число больше первого”, 
// “оба числа равны”.

// let num1 = Number(prompt('Enter your f*king number 1'));
// let num2 = Number(prompt('Enter your f*king number 2'));
// if(num1 > num2){
//     console.log('your f*king number 1 is more then your f*king number 2');  
// }
// else if(num2 > num1){
//     console.log('your f*king number 2 is more then your f*king number 1');
// }
// else{
//     console.log('your two f*king numbers are f*king same mother f*uker');  
// }

// Массив (Array);
//let fruits = ['Apple', 'Bananozzz'];
//console.log(fruits.length); // длина массива
//let first = fruits[1];
//console.log(first);
//
//fruits.push('Orange'); // добавление элемента в конец массива
//console.log(fruits.length); // длина массива
//
//// fruits.pop(); // удаление последнего элемента массива
// fruits.shift(); // удаление первого элемента массива
//fruits.unshift('Lime'); // добавление элемента в начало массива
//
//console.log(fruits);
//let pos = fruits.indexOf('Bananozzz');
//console.log(pos);
//fruits.splice(pos, 2) // '2' - сколько элементов начиная с pos удалить

// Программа, которая считывает три числа через prompt 
// и добавляет их в массив.
//let arr = [];
//let num1 = Number(prompt('Enter your f*king number 1'));
//let num2 = Number(prompt('Enter your f*king number 2'));
//let num3 = Number(prompt('Enter your f*king number 3'));
//arr.push(num1, num2, num3);
//console.log(arr);

//Задание:
//
//1.	Создайте массив styles с элементами «Джаз» и «Блюз».
//2.	Добавьте «Рок-н-ролл» в конец.
//3.	Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать для 
// массивов с любой длиной.
//4.	Удалите первый элемент массива и покажите его.
//5.	Вставьте Рэп и Регги в начало массива.

//let styles = ['Джаз', 'Блюз'];
//console.log(styles);
//styles.push('Рок-н-ролл'); //добавление в конец массива
//console.log(styles);
//styles[Math.floor(styles.length - 1) / 2] = 'Классика';
//
//// Math.floor(2.6)//2
//// Math.ceil(2.2)//3
//// Math.round(2.5)//3
//
//styles.shift();
//styles.unshift('Рэп', 'Рэгги'); // добавление в начало массива
//console.log(styles);


//Задание: 
//Написать программу, в которой объявлен массив с 
//5 числовыми элементами. 
//Программа должна заполнить новый пустой массив квадратами чисел 
//из первого массива.
//Пример: 
//Исходный массив [1, 4, 2, 5, 3]
//Итоговый массив [1, 16, 4, 25, 9]

//let arr = [1, 4, 2, 5, 3];
//console.log(arr);
//num1 = Number = arr[0];
//num2 = Number = arr[1];
//num3 = Number = arr[2];
//num4 = Number = arr[3];
//num1 = num1 ** 2;
//num2 = num2 ** 2;
//num3 = num3 ** 2;
//num4 = num4 ** 2;
//arr = [num1, num2, num3, num4];
//console.log(arr);
//

//Циклы
 //for (Начало; Условия; Шаг){
//
 //}

//for(let num = 0; num <=5; num++){
//   console.log(num);
//   if(num == 2){
//       continue;
//   }
//}

 //1-я итерация num = 0;
 //2-я итерация num = 1;
 //3-я итерация num = 2;
 //4-я итерация num = 3;
 //5-я итерация num = 4;
 //6-я итерация num = 5;


 //Задание: 
//Написать программу, в которой объявлен массив с 
//5 числовыми элементами. 
//Программа должна заполнить новый пустой массив квадратами чисел 
//из первого массива.
//Пример: 
//Исходный массив [1, 4, 2, 5, 3]
//Итоговый массив [1, 16, 4, 25, 9]
 //let arr = [];
 //for (let num = 0; num < 5; num++){
 //   arr.push(Number(prompt()));
 //}
 //console.log(arr);
//
 //let arr2 = [];
 //for (let num = 0; num < 5; num++){
 //   arr2.push(arr[num]**2);
 //}
 //console.log(arr2);

 let arr = [1, 0, 13, -40, 0, -1, 3, 6];
 for(let num = 0; num < arr.length; num++){
    if(arr[num] > 0){
        console.log(arr[num]);
    }
 }