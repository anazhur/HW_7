// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function minNum(a, b) {
//     if (a < b) {
//         return a
//     } return b
// }

// const result = minNum (7,3)
// console.log(`Наименьшее число - ${result}`);

// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function createArrDecrease(a, b) {
//   let min = a;
//   let max = b;
//   if ((a > b)) {
//     min = b;
//     max = a;
//   }
//   let newArr = [];
//   for (let index = max; index >= min; index--) {
//     newArr.push(index);
//   }
//   return newArr;
// }
// let result = createArrDecrease(35, 48);
// console.log(result);

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// let numPower
// function power(a, b = 2) {
//     numPower = a ** b
//     console.log(`numPower = ${numPower}`);
// }

// power(6)

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumTillN(n) {
//     let newArr = []
//     let sum = 0
//     for (let index = 1; index <= n; index++) {
//         newArr.push(index)
//     }
//     console.log(newArr);
//     for (let index = 0; index < newArr.length; index++) {
//         sum+= newArr[index]
//     }
//     console.log(`sum = ${sum}`);
// }
// sumTillN(5)

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sumsEvenOdd(n, m) {
//     let newArr = []
//     let sumEven = 0
//     let sumOdd = 0
//     for (let index = n; index <= m; index++) {
//         newArr.push(index)
//     }
//     console.log(newArr);
//     for (let index = 0; index < newArr.length; index++) {
//         if (newArr[index] % 2 === 0) {
//             sumEven += newArr[index]
//         } else {
//             sumOdd += newArr[index]
//         }
//     }
//     console.log(`sumEven = ${sumEven}`)
//     console.log(`sumOdd = ${sumOdd}`)
// }

// sumsEvenOdd(3,16)

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

function findLongestElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    let longest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index].length > longest.length) {
            longest = arr[index];
        }
    }
    return longest;
}

const result = findLongestElement(['one', 'two', 'three']);
console.log("Самый длинный элемент:", result);