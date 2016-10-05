var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


//1

function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray)
}

console.log('#1. Max number in array: ' + getMaxOfArray(numbers))

//2

var lengthOfStrings = [];

function longWordFinder(array) {
	for(var i = 0; i < array.length; i += 1) {
		lengthOfStrings.push(array[i].length) //loop through array and push value of lengths
	}
	//console.log(lengthOfStrings) //print lengths of words
	var longStringNum = getMaxOfArray(lengthOfStrings)  //find largest number, which is lenght of longest word
	var indexOflongString = lengthOfStrings.indexOf(longStringNum) //index position of largest number, which is index of longest word
	console.log('#2. Longest word in array: ' + array[indexOflongString]) //log longest word
}

longWordFinder(strings)

//3

var evenNumbers = [];

function evenNumFinder(numArray1) {
	for(var i = 0; i < numArray1.length; i += 1) {
		if (numArray1[i]%2 === 0) {
			evenNumbers.push(numArray1[i])
		}
	}
	console.log('#3. Even numbers in your array: ' + evenNumbers)
}

evenNumFinder(numbers)

//4

var oddNumbers = [];

function oddNumFinder(numArray2) {
	for(var i = 0; i < numArray2.length; i += 1) {
		if (numArray2[i]%2 !== 0) {
			oddNumbers.push(numArray2[i])
		}
	}
	console.log('#4. Odd numbers in your array: ' + oddNumbers)
}

oddNumFinder(numbers)

//5



var isWords = []

function isFinder(array2) {
	for(var i = 0; i < array2.length; i += 1) {
		if (array2[i].indexOf("is") !== -1) {
			isWords.push(array2[i])
		}
	}
	console.log('#5. Words that contain is: ' + isWords)
}

isFinder(strings)

// 5

var numbersAndStrings = [];
numbersAndStrings = numbers.concat(strings)
console.log("#5. Concatenated array: " + numbersAndStrings)

//6

var jsTeachers = []

function jsTeacherSort(array3) {
	for (var i = 0; i < array3.length; i += 1) {
		if (array3[i].teaches === 'JavaScript') {
			jsTeachers.push(array3[i].firstname)
		}
	}
	console.log("#6. JS teachers: " + jsTeachers.sort())
}

jsTeacherSort(instructors)
