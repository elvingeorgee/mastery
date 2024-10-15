// let name ="John";
// let last = "Doe";
//
// console.log(name);
// console.log(last);

// let age = 11;
// console.log(age);
//
// age = 54;
// console.log(age);

// const pi = 3.14;
// pi = 10;
//
// console.log(pi);

// 1
// console.log(24+43);

// 2
// let sum = 2 + 5 + 4 + 5 + 4 + 5 + 4;
// console.log(sum);

//3
// let result = (4 + 6 + 9)/77;
// console.log(result);

//4
// var a = "Farts Mcgee"
// console.log(a);

//5
// const max = 57;
// var actual = max - 13;
// var percentage = actual/max;
// console.log(percentage);

// let name = "Elvin";
// alert(`Hello, ${name}`);

// let age;
// alert(age);

// let age = 100;
// age = undefined;
// alert(age);

// typeof undefined;
// typeof 0;
// typeof 10n;
// typeof true
// typeof "foo"
// typeof Symbol("id")


// let name = "Ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);

// const string = "The revolution will not be televised";
// console.log(string);
// const badstring = string;
// console.log(badstring);

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;
//
// console.log(single);
// console.log(double);
// console.log(backtick);

// const name = "Elvin";
// const greeting = `hello, ${name}`;
// console.log(greeting);

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined);

// const button = document.querySelector("button");
//
// function greet()
// {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to see you!`;
// }
//
// button.addEventListener("click", greet);


// const newline = 'One day you finally knew\nwhat you had to do, and began';
// console.log(newline);

// const goodQuotes1 = `She said "I think so!"`;
// const goodQuotes2 = `She said "I'm not going in there!"`;

// const bigMouth = `I\'ve got no right to take my place..`;
// console.log(bigMouth);

// const name = "Front ";
// const number = 242;
// console.log(name + number);

// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

// const myNum2 = 123;
// const myString2 = String(myNum2);
// console.log(typeof myString2);

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);

//4 methods for extracting string characters:


// let text = "HELLO WORLD";
// let char = text.charAt(0);
//
// console.log(text.charAt(0));

// let stringer = "Natalie";
// let char = stringer.charAt(5);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(4);
// console.log(char);

// const name = "Peicitures";
// let letter = name.at(4);
// console.log(letter);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);


// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part)

// const a = "a";
// const b = "b";
// if(a < b)
// {
//     console.log(`${a} is less than ${b}`);
// }
// else if(a > b)
// {
//     console.log(`${a} is greater than ${b}`);
// }
// else
// {
//     console.log(`${a} and ${b} are equal.`);
// }

// a = 144;
// switch(a)
// {
//     case 144:
//         alert("Nice");
//         break;
//     case 4:
//         alert("Noaw");
//         break;
//     case 5:
//         alert("Too Far");
//         break;
//     default:
//         alert("bumbaclot")
//
// }


// let a = 3;
// switch(a)
// {
//     case 4:
//         alert("Right!");
//         break;
//     case 3:
//     case 5:
//         alert("Wrong!");
//         alert("Why don't you take a math class?");
//         break;
//     default:
//         alert("The result is strange.Really");
// }


// let arg = prompt("Enter a value?");
// switch(arg)
// {
//     case '0':
//     case '1':
//         alert('One or Zero');
//         break;
//     case '2':
//         alert("Two");
//         break;
//     case '3':
//         alert("Never Executes!");
//         break;
//     default:
//         alert("An unknown value");
// }


// function faveAnimal(animal)
// {
//     alert(animal + ' is my favorite animal!')
// }
//
// console.log(faveAnimal('Goat'));

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// // I love chocolate frogs
//
// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);
// I, love, chocolate, frogs


// const imadeIt = ["Aaron", "Rodgers", "will", "shut", "em","up"]
// const it = imadeIt.join(" ");
// console.log(it);

// function hello(name = "Aaron")
// {
//     console.log(`hello ${name}`);
// }
// hello("ARod");
// hello();

// function myFunction()
// {
//     alert("hello");
// }


// function logKey(event)
// {
//     console.log(`You pressed "${event.key}.`)
// }
//
// text.box.addEventListener("keydown", logKey);


// textBox.addEventListener("keydown", function(event))
// {
//     console.log(`You pressed "${event.key}".`);
// }

// function logKey(event)
// {
//     console.log(`You pressed "${event.key}".`);
// }
//
// textBox.addEventListener('keydown', logKey);


// textBox.addEventListener("keydown", (event) =>{
//     console.log(`You pressed "${event.key}".`);
// });
//
// textBox.addEventListener("keydown", event =>{
//     console.log(`You pressed "${event.key}".`);
// })

// const originals = [1, 2, 3];
// const doubled = originals.map(item=> item * 2);
// console.log(doubled);
//map takes each item in the array and passes it in a given function.

// function doubleItem(item)
// {
//     return item * 2;
// }
//
// console.log(doubleItem(5));

// const textBox = document.querySelector('#textBox');
// const output = document.querySelector('#output');
//
// textBox.addEventListener('keydown', (event) => {
//     output.textContent = `You pressed ${event.key}.`;
// })


// const name = "Chris";
// function greeting()
// {
//     alert(`Hello ${name}: welcome to our company.`);
// }


// const button = document.querySelector("button");
//
// function greet()
// {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}!`;
// }
//
// button.addEventListener("click", greet);

// const greeting = "Hello";
// const name = "dingo"
// console.log(greeting + ", " + name);

// const greeting = "Hello";
// const name = "Michael";
// console.log(`${greeting} ${name}`);

// const song = "Fight the Youth";
// const score = 5;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${score/highestScore}%.`;
// console.log(output);

// const newLine = `One Day you finally knew
// what you had to do, and began`;
// console.log(newLine);

// const newline = "One day you finally knew\n what you had to do, and began,";
// console.log(newline);


// const badQuotes = "She said "I think so!"";

// const goodQuotes1 = `She said "I think so!"`;
// const goodQuotes2 = `She said "I'm not going in there!"`;

// const bigmouth = `I\'ve got no right to take my place`;
// console.log(bigmouth);

// console.log("string text line 1\n" + "string text line 2");
// console.log("I want all of them\n" + "in a body bag");

// const name = "Farts ";
// const number = 44;
// console.log(name + number);

// const myString = "123";
// const myNum = Number(myString);
// console.log(myNum);

// const myNum2 = 134;
// const myString3 = String(myNum2);
// console.log(myString3);

// function troubleshooting()
// {
//     const a = 1;
//     const b = 2;
//
//     let result;
//
//     result = a + b;
//
//     return result;
// }
//
// console.log(troubleshooting());

// function farts()
// {
//     const a = "bingo "
//     const b = "looks to eat";
//
//     let result = a + b;
//
//     return result;
// }
//
// console.log(farts());

// number = Number(prompt("Enter a number"));
//
// function numberChecker()
// {
//     if(number >= 10)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// console.log(numberChecker(number));

// const a = 1 + 8;
// const b = 22 * 3;
// const c = 5 % 4;
// const d = a - 17;
// const e = a + b + c + d;
//
// console.log(e);

// const birthYear = 1960;
// const thisYear = 2024;
// const firstName = "George";
// const lastName = "Aseervatham";
//
// const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + "years old";
//
// console.log(greeting);

// const firstName = "George";
// const lastName = "Asseervatham";
// const thisYear = 2024;
// const birthyear = 1960;
// const fullname = firstName + lastName;
// const age = thisYear - birthyear;
//
// const greeting = "Hello! My name is  " + fullname + " and I am " + age + " years old";
//
// console.log(greeting);


// function faveAnimal(animal)
// {
//     return animal + " is my favorite animal";
// }
//
// console.log(faveAnimal("Cheetah"));


// function myFunction() {
//     alert("hello");
// }
//
// console.log(myFunction());

// const myNumber = Math.random();

// const myText = "I am a string";
// const newString = myText.replace("string", "bumbaclot");
// console.log(newString);


// const myArray = ["I", "Am", "A", "Bumboclot"];
// const madeArray = myArray.join(" ");
// const monk = myArray.join;
// console.log(madeArray);
// console.log(monk);

// function myFunction()
// {
//     alert("hello");
// }

// function logkey(event)
// {
//     console.log(`You pressed "{event.key}".`);
// }
//
// textBox.addEventListener("keydown", logkey);

// const textBox = document.getElementById('textBox');
// const alertButton = document.getElementById('alertButton');
//
// textBox.addEventListener(`keydown`, (event)=>{
//     console.log(`You pressed "{event.key}".`)
// });
//
// alertButton.addEventListener('click', (event)=>{
//     alert(`You entered: ${textBox.value}`);
// })

// const textbox = document.getElementById("textbox");
// const alertButton = document.getElementById("alertButton");
//
// textbox.addEventListener("keydown", e => {
//     console.log(`You pressed "${textbox.value}".`); // Use backticks for template literals
// });
//
// alertButton.addEventListener("click", e => {
//     alert(`You entered: ${textbox.value}`);
// });


// const button = document.createElement('button');
// button.textContent = 'Click me!';
//
// button.addEventListener('click', e => {
//     console.log('Button clicked!');
// })
//
// document.body.appendChild(button);


// const originals = [1,2,3];
//
// const doubled = originals.map(item => item * 2);
//
// console.log(doubled);

// const ogs = [1, 2, 3];
//
// function doubleItem(item)
// {
//     return item * 2;
// }
//
// console.log(doubleItem(ogs[0],ogs[1],ogs[2]));

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
//
// textBox.addEventListener("keydown", (event)=>{
//     output.textContent = `You pressed "${event.key}".`;
// })

