// JavaScript Strings In Details ==>

// EXAMPLE 2 ==>


// SINGLE QUOTE

const single = 'This is a string written inside a single quote';
console.log(single);

// DOUBLE QUOTE

const double = "This is a string written inside a double quote"
console.log(double);

// BACKTICK QUOTE

const backTick = `This is a string written inside a backtick quote`
console.log(backTick);

// EXAMPLE 2 ==>

const single1 = '${2+2}';
console.log(single1);

const double1 = "${2+2}";
console.log(double1);

const backTick1 = `${2+2}`;
console.log(backTick1);

// EXAMPLE 3 ==>

// STRING INSIDE STRING ==>

const greeting = "I'm Rodiyat. I'm a developer";
console.log(greeting);

const greeting2 = 'I am "Rodiyat". I am a "developer"';
console.log(greeting2);

const greeting3 = `I'm "Rodiyat". I'm a "developer"`
console.log(greeting3);

// EXAMPLE 4 ==>

// ESCAPE CHARACTER ==>

const greeting4 = 'Hi, I\'m Teddy, but people call me \'Teddyman\' '
console.log(greeting4);

// STRING LENGTH ==>  To return the length of a string

// EXAMPLE 5

const name1 = 'Emmanuel Teddy, Alimi Muaz';
console.log(name1.length);

const name2 = 'Muaz'
console.log(name2.length);

// EXAMPLE 6 ==>

// USING POSITION OF CHAR ==>

const firstletter = name1[0];
console.log(firstletter);

const aletter = name1[25];
console.log(aletter);

const lastletter = name1[name1.length-1];
console.log(lastletter);

// EXAMPLE 7 ==>

// CHANGE STRING CASE ==> Uppercase and Lowercase

const mixedStringCase = 'Hello, How are you?';

const lowerCase = mixedStringCase.toLowerCase();
console.log(lowerCase);

const Uppercase = mixedStringCase.toUpperCase();
console.log(Uppercase);

// EXAMPLE 8 ==>

// SEARCHING FOR A SUBSTRING ==> 5 method we can use to search for a sunstring

// STR.INDEXOF()

const exampleStr = 'I love cat, he said, dogs are great';
console.log(exampleStr.indexOf('cat'));
console.log(exampleStr.lastIndexOf('cat'));

// LASTINDEXOF()

const sentence = 'I am hungry, I need to eat good food';
const lastIndexOf = sentence.lastIndexOf('hungry');
console.log(lastIndexOf);

const text = "JavaScript is a powerful language";
const index = text.lastIndexOf("powerful");
console.log(index); 

// INCLUDES ==>

const test = 'Hello Guys! welcome to my status.';

const check = test.includes('status');
console.log(check);

// STARTSWITH ==> 

const start = 'Saturday night plans';
console.log(start.startsWith('Sat'));

// ENDSWITH ==>

const str = 'Cats are the best!';
console.log(str.endsWith('best!'));

// TRIM ==>

const greet = '     Hello World!   '
console.log(greet.trim());

// SPLIT ==>

const split = 'The quick brown fox jumps over the lazy dog.'
console.log(split.split(''));

const split2 = 'jump'
console.log(split2.split(''));
console.log(typeof split2);

// SLICE ==>

const slice = 'Hello World!';
console.log(slice.slice(0 , 5));

const classWork = 'My name is Rodiyat, I am from Kwara State   '

console.log(classWork.startsWith('My'));

console.log(classWork.trimEnd());

console.log(classWork.split());

console.log(classWork.slice(0, 10));





