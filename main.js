"use strict";
// Assignment no 1  (Step00 Hello World):
let message = "Hello World";
console.log(message);
//Assignment no 2  (Persnol message):
let personName = "Eric";
console.log(`Hello ${personName} would you like to learn some python today?`);
// Assignment no 3  (Name Case):
// lowercase
let personName = "Shiza";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
//Assignment no 4 (Famous quote):
let quote = "A person who never made a mistake never tried anything new";
let author = "Albert Einstien";
console.log(`${author} once said, "${quote}`);
// Assignment no 5 (Famous quote 2):
let quote = "A person who never made a mistake never tried anything new";
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, ${quote}`;
console.log(message);
// Assignment no 6  (Stripping names):
let personName = `\n\t ALLAMA IQBAL\t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//Assignment no 7,8  (Number 8):
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Assignment no 9 (Favourite Number):
let favouriteNumber = 14;
console.log(`My favourite number is ${favouriteNumber}`);
// Assignment no 10  (Adding comments):
//excersie 10
//My name is MANIYA TARIQ
//Dated: 21/02/2024
//This program will run simple code 'HELLO WORLD'
console.log("Hello world simple program");
// Assignment no 11  (Names):
let members = ['Quba', 'Zainab', 'Aliza', 'Aina', 'Muntaha'];
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
// Assignment no 12  (Greetings):
let members = ['Quba', 'Zainab', 'Aliza', 'Aina', 'Muntaha'];
let message = " : Wishing a blessed and cheerful Ramadan to you!";
for (let i = 0; i < members.length; i++) {
    console.log(members[i] + message);
}
//Asssignment no 13  (Your own Array):
let transportation = ['Civic', 'Bike', 'Corolla', 'AUDI', 'Mercedes'];
for (let i = 0; i < transportation.length; i++) {
    console.log('Iwould like to own a ' + transportation[i]);
}
//Assignment no 14  (Guest list):
let guest_list = ['Asfahan', 'Shiza', 'Wasay', 'Saniya'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
}
// Assignment no 15  (Changing guest list):
let guest_list = ['Asfahan', 'Shiza', 'Wasay', 'Saniya'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
}
let not_present = 'Asfahan';
let new_guest = 'Soha';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
}
console.log(`Mr. ${not_present} will not coming for tomorrow dinner.`);
// Assignment no 16  (More guests):
let guest_list = ['Asfahan', 'Shiza', 'Wasay', 'Saniya'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
// }
let not_present = 'Asfahan';
let new_guest = 'Soha';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
}
guest_list.unshift('Mahbeer', 'Khizar', 'Rayyan');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
}
// Assignment no 17  (Shrinking guest list):
let guest_list = ['Asfahan', 'Shiza', 'Wasay', 'Saniya'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
// }
let not_present = 'Asfahan';
let new_guest = 'Soha';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
// }
guest_list.unshift('Mahbeer', 'Khizar', 'Rayyan');
//  for(let i=0; i<guest_list.length; i++){
//      console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
//  }
console.log('\nUnfotunately! the new dinner table wont arrive so we can invite only 2 guest');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Mr/Miss,${remove_guest} you are not invited for dinner,`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear!' + guest_list[i] + ',\nyes you are still invited on tomorrow dinner.\n\nThank You!\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
// Assignment no 18  (Seeing the world):
//Show that the Array is still in its Original Order
console.log("Stil in Original Order:", placestovisit);
//Print the Array in Reversed Order without modifying the actual Array List
console.log("Reverse Order:", [...placestovisit].reverse());
//Show that the Array is still in its Original Order
console.log("Stil in Original Order:", placestovisit);
//We have changed the Original Array Order now
console.log("Original Array Reversed:", placestovisit.reverse());
//print the Array to show that it back to it's Original Order
console.log("Back to Original Order:", placestovisit.reverse());
//print the Array to show that its order has been changed in Alphabetical oder now
console.log("Sorted in Alphabetical Order:", placestovisit.sort());
//We have changed again the Original Array Order now in reverse order again
console.log("Original Array Reversed Again:", placestovisit.reverse());
// Assignment no 19  (Dinner guests):
let guest_list = ['Asfahan', 'Shiza', 'Wasay', 'Saniya', 'Azlan'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear!' + guest_list[i] + ',\nI invited you on dinner tomorrow.\n\nThank You!\n');
// }
let lengthGuests = guest_list.length;
console.log(`We are Inviting total ${lengthGuests} guests.`);
// Assignment no 20  (Think of something):
//Making a programming languages Array
let programmingLanguages = ["Javascript", "Python", "Typescript", "HTML", "PHP", "CSS"];
// print the message of list
console.log("List of Programming Languages:");
//print the values of Array in the form of list
programmingLanguages.forEach(language => console.log(language));
let ITCourse = {
    courseName: "Typescript and Python",
    location: "Governor House Sindh ",
    onsiteStudents: "50000",
    onlineStudents: "450000",
};
console.log(ITCourse);
// Assignment no 22  (Intentional Error):
// Creating a Array
let errorArray = ["A", "B", "C", "D"];
// producing Error ! by Accessing invalid index of Array
//console.log(errorArray[8]);
//Error removed
console.log(errorArray[2]);
// Assignment no 23  (Conditional test):
//making a varaibles
let six = 6;
let four = 4;
//test 1
console.log("Test 1: Six is equal to 6?");
console.log(six == 6);
//Test 2
console.log("\nTest 2: four is equal to 4?");
console.log(four == 4);
//test 3
console.log("\nTest 3: 6 is not equal to 4");
console.log(six != four);
//test 4
console.log("\nTest 4: 6 is greater than 4");
console.log(six > 4);
//test 5
console.log("\nTest 5: 4 is less than 6");
console.log(four < 6);
//test 6
console.log("\nTest 6: 6 is less than 4");
console.log(6 < 4);
//Test 7
console.log("\nTest 7: 4 is equal to 6?");
console.log(four == 6);
//test 8
console.log("\nTest 8: 6 is not equal to 6");
console.log(6 != 6);
//test 9
console.log("\nTest 9: 4 is greater than 6");
console.log(4 > 6);
//test 10 
console.log("\nTest 10: 4 is not equal to 4");
console.log(4 != 4);
//test 11 
console.log("\nTest 11: 50 is greater than 100 ");
console.log(50 > 100);
// Assignment no 24  (More conditional tests):
// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let five = 5;
let thirty = 30;
let fruits = ["Banana", "Mango", "Orange"];
// test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// tests using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase? ");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests
// equal to
console.log("\nIs five is equal to thirty?");
console.log(five == thirty);
// not equal to
console.log("\nIs five is not equal to thirty?");
console.log(five != thirty);
// greater than
console.log("\nIs five is greater than zero?");
console.log(five > 0);
console.log("\nIs thirty is less than five?");
console.log(thirty < five);
// greater than or equal to
console.log("\nIs thirty is greater than or equal to ten?");
console.log(thirty >= 10);
// less than or equal to 
console.log("\nIs thirty is less than or equal to five?");
console.log(thirty <= 5);
// tests using "and" & "or" operators
// using && (and)
console.log("\n thirty is not equals to 5 and thirty is greater than 5");
console.log(thirty != 5 && thirty > 5);
console.log("\n thirty is not equals to 5 and thirty is greater than forty");
console.log(thirty != 5 && thirty > 40);
//using || (or)
console.log("\n 30 is greater than 50 OR 30 is equal to 30");
console.log(30 > 50 || 30 == 30);
console.log("\n 30 is greater than 50 OR 30 is not equal to 30");
console.log(30 > 50 || 30 != 30);
// test whether an item is include in array
console.log("\n Is Orange include in my fruits array");
console.log(fruits.includes("Orange"));
//not include
console.log("\nIs Orange is not include in my fruits array");
console.log(!fruits.includes("Orange"));
// Assignment no 25  (Alien colour # 1):
let alien_color = "White";
if (alien_color === "Green") {
    //code
    console.log(" Alien Color is Green player just earned 5 points");
}
if (alien_color === "White") {
    console.log("Alien Color is White");
}
// Assignment no 26  (Alien color # 2):
// define the variable
let alien_color = "green";
//first version
if (alien_color === "green") {
    console.log("player just earned five points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
// second version
if (alien_color === "red") {
    console.log("im come from if statement.");
}
else {
    console.log("im come from else statement.");
}
// Assignment no 27 (Alien color # 3):
// define variable
let alienColor = "green";
// using if and else-if statement
if (alienColor === "green") {
    console.log("(version 1) you shot down green alien you have earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points. ");
}
else if (alienColor === "red") {
    console.log("you shot down red alien you have earned 15 points.");
}
// version 2
let alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien you have earned 5 points. ");
}
else if (alienColor2 === "yellow") {
    console.log("(version 2) you shot down yellow alien you have earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("you shot down red alien you have earned 15 points.");
}
//version 3
let alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points.");
}
else if (alienColor3 === "red") {
    console.log("(version 3) you shot down red alien you have earned 15 points.");
}
// Assignment no 28 (Stages of life):
// creating a variable
let age = 19;
// creating a program for determining the stage of life using if-else chain
if (age < 2) {
    console.log("You are a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You are a Toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are an Adult.");
}
else if (age >= 65) {
    console.log("You are Elders.");
}
// Assignment no 29  (Favourite Fruit):
//creating an array
let favourite_fruits = ["Mango", "Orange", "Banana"];
//using 5 independent if statements
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mangoes.");
}
if (favourite_fruits.includes("Banana")) {
    console.log("I really like Bananas.");
}
if (favourite_fruits.includes("Apple")) {
    console.log("Ireally like Apples.");
}
if (favourite_fruits.includes("Orange")) {
    console.log("I really like Oranges.");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("Ireally like Strawberries.");
}
// Assignment no 30  (Hello Admin):
// creating an Array
let userNames = ["Shiza", "Wasay", "Azlan", "Admin", "Asfahan"];
// using forEach loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see the status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
});
// Assignment no 31  (No users):
let userNames = ["Shiza", "Wasay", "Azlan", "Admin", "Asfahan"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty we need to find some users.");
}
else {
    // using forEach loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see the status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again`);
        }
    });
}
// Assignment no 32  (Checking usernames):
//array of current users
let current_users = ["Maniya", "shiza", "Asfahan", "Wasay", "Saniya"];
// array of new users
let new_users = ["Azlan", "Rayyan", "Shiza", "Yahya", "Asfahan"];
// loop through new_users to check for usernames avalability
new_users.forEach(new_one_user => {
    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // print different mesages using if-else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available`);
    }
});
// Assignment no 33  (Ordinal numbers):
// creating a array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using For-Loop
for (let oneNumber of numbers) {
    let ordinalEnding;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}
// Assignment no 34 (Pizzas):
//creating a array
let pizza = ["Chicken Tikka", "Malai Boti", "Fajita"];
//using For-Loop
for (let onePizza of pizza) {
    console.log(`I like ${onePizza} pizza`);
}
//print a message outside of the for-loop
console.log("Pizza is Love");
// Assignment no 35  (Modify Animal array):
// creating a Array
let petAnimals = ["Cat", "Dog", "Rabbit", "Parrot"];
//using For-loop
for (let onePet of petAnimals) {
    console.log(`A ${onePet} would make a great pet.`);
}
//print a message outside of For-Loop
console.log("Any of these animals would make a great pet!");
// Assignment no 36 (T-Shirt):
function make_shirt(size, printMessage) {
    console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt`);
}
make_shirt("Small", "Good Vibes Only");
make_shirt("Medium", "Good Days");
// Assignment no 37  (Large Shirts):
// making a function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt.`);
}
// calling a function with by default values
make_shirt();
//calling a function now with medium size and default message
make_shirt("Medium");
//caling a function now with small size and different message print on it
make_shirt("Small", "I Love Programming");
// Assignment no 38  (Cities):
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
// Assignment no 39  (City names):
// creating a function with parameters which returns a value in string
function city_country(city, country) {
    return `${city}, ${country}`;
}
// calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Germany"));
// Assignment no 40  (Album):
// define the make_album function
function make_album(artsit_name, album_title, tracks) {
    let album = {
        artist: artsit_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating 3 variables with differnt values
let album1 = make_album("Ali Zafar", "Album title 1");
let album2 = make_album("Sajjad Ali", "Album title 2");
//calling a make_album function with 3rd parameter
let album3 = make_album("Atif Aslam", "Album title 3", 5);
//print values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
// Assignment no 41  (Magicians):
// define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//creating an array containing magicians name
let magicians_names = ["Harry Potter", "David blaine", "Dynamo", "Cris Angel"];
//calling the function to print each magician name
show_magicians(magicians_names);
// Assignment no 42 (Great magicians):
//define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through .map()it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//creating an array
let magicians_name = ["Harry Potter", "David belain", "Cris Angel", "Dynamo"];
// call make_great function to modify magicians name
let great_magicians = make_great(magicians_name);
console.log(great_magicians);
//call show_magicians to show the modified list of magicians
show_magicians(great_magicians);
// Assignment no 43 (Un changed magicians):
//define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great through .map()it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//creating an array
let magicians_name = ["Harry Potter", "David belain", "Cris Angel", "Dynamo"];
// making a copy of original array through .slice() function
let copy_magicians_name = magicians_name.slice();
// modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_name);
// show both arrays original and copied
// original
console.log("Original Array\n");
show_magicians(magicians_name);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
// Assignment no 44  (Making Sandwiches):
//define a function with a rest parameter that represents items arguments representing our sandwitch
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the followin items: \n ");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich!");
}
//call the function 3 times with 3 different numbers of argument
make_sandwich("Chicken", "Ketchup", "Cheese", "mayo");
make_sandwich("Bread", "Butter", "Egg");
make_sandwich("chicken", "Onion", "Tomato", "Lettuce", "Egg", "Cheese");
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Corolla", { color: "Black", year: "2024" });
console.log(myCar);
