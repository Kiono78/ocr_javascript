//Object

console.log("Ojects\n");

let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};
console.log(myBook);
console.log(myBook.title);
let bookTitle = myBook["title"];
console.log(bookTitle);

//Class

class Book{
	constructor(title, author, numberOfPages){
		this.title = title;
		this.author = author;
		this.numberOfPages = numberOfPages;
	}
	numberOfPages(){
		return (this.numberOfPages);
	}
}

let bible = new Book("Bible", "Les Apotres", 10000);
console.log(bible);

console.log("My bible has " + bible.numberOfPages + " pages");


// Array
//array.push()
//array.pop()
//array.unshift()

console.log("\n\nArray\n");

let shelf = [];
shelf[0] = myBook;
shelf[1] = bible;
shelf[2] = "Le dernier bouquin sans info";
shelf = ["Book1", "Book2"];

console.log("\n\nprinting shelf content\n");

let i;
for (i=0; i<shelf.length; i++)
{
    console.log(shelf[i]);
	console.log(typeof shelf[i]);
}

let antechrist = new Book("antechrist", "Satan");
shelf.push(antechrist)
console.log(shelf[shelf.length - 1]);
antechrist.numberOfPages = 1;
console.log(antechrist.numberOfPages + 1);
shelf.push(bible);
shelf.pop(myBook);

// if condition

console.log("\n\nIf condition\n");


if (5 == "5")
	console.log("== doesn't check the data type")
if (5 === "5")
	console.log("=== doesn't check the data type")
else
{
	console.log("=== does check data type")
}

//variable scope

console.log("\n\nVariable scope\n");

if (true)
{
	let localVar;
	localVar = true;
}
if (typeof localVar == 'undefined')
    console.log("localVar does not exist in main program");

//Loop
//for... in
//for... of

console.log("\n\nLoop\n");

i = 0;
console.log("for (i in shelf)\n");
for (i in shelf)
	console.log(shelf[i]);
i = 0;
console.log("\nfor (book of shelf)\n");
for (book of shelf)
	console.log(book);


//Function
console.log("\n\nMean function\n");

function mean(array)
{
	let total = 0;
	for (element of array)
	{
		if (typeof element == 'number')
			total += element;
		else
		{
			return ("Error: An element of the array is not a number\n");
		}
	}
	return (total / array.length);
}

let rightNbArray = [0, 5, 10, 15, 20];
console.log("rightNbArray = [0, 5, 10, 15, 20] mean is " + mean(rightNbArray));

let wrongNbArray = [0, 'a', 10, 15, 20];
console.log("wrongNbArray = [0, 'a', 10, 15, 20] mean is " + mean(wrongNbArray));

//Static methods
// Method is directly linked to 


class giveTime
{
	static dayOfTheWeek()
	{
		let today = new Date();
		console.log("Today is the " + today.getDay() + "day of the week\n")
	}
}

giveTime.dayOfTheWeek();
