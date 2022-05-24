'use strict';   
// 더이상 비상식적인 코드를 사용하지 못하게 선언하고 시작하는 게 좋다.


// 2. Variable
// let ( added in ES6 ) rw(read and write)

let globalName = 'global name'   // 2.밖에서 만든 변수는 안, 밖 모두 접근 가능

{
    let name = '은형'  // 1.block => 괄호 안에서 만든 변수는 안에서만 접근 가능
    console.log(name)
    name = 'hello'
    console.log(name)
    console.log(globalName) // 2.밖에서 만든 변수 밖 접근 가능
}                           

console.log(name)  // 1.안에서 만든 name변수 접근 불가
console.log(globalName)  // 2.밖에서 만든 변수 밖 접근 가능

// var ( don't ever use this!! )
// var hoisting ( move declaration from bottom to top)
// 어디에 선언하든 상관없이 위로 끌어올려주는 것
// 선언하지 않았는데 대입을 먼저 할 수 있다.
// block scope가 작동하지 않아 어디서든 접근이 가능하다.
age = 4;
var age;    // 에러가 발생하지 않는다. 호이스팅이 일어나기 때문.
console.log(age)

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note !
// Immutable data types(변경불가) : primitive types, frozen objects (i.e. objects.freeze())
// Mutable data types(변경가능) : all objects by default are mutable in JS
// favor immutable data type always for a few reasons :
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// null
let a = null;
console.log(`value : ${a}`)   // value : null

// undefined
let b ;
console.log(`value : ${b}`)   // value : undefined

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`)
text = 1;   // string값을 담았었지만 숫자를 담으면
console.log(`value : ${text}, type : ${typeof text}`)  // number 출력
text = '7' + 5; // 문자와 숫자를 더하면
console.log(`value : ${text}, type : ${typeof text}`)  // 숫자를 문자로 인식해서 문자 75 출력
text = '8' / '2'  // 문자를 나눠버리면
console.log(`value : ${text}, type : ${typeof text}`)  // 문자를 숫자로 인식해서 숫자 4 출력