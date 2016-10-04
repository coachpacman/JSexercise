
//Q1

function sum(num1, num2) {
	return num1 + num2
}

console.log(sum(5,10))

//Q2

function avg(x, y, z) {
	return (x + y + z)/3
}

console.log(avg(19,280,201))

//Q3

function getLength(string) {
	return string.length
}

console.log(getLength("as;dlfj3jf!#pcou4"))

//Q4

function greaterThan(param1, param2) {
	if (param1 > param2 ) {
		return true; 
	}
	else {
		return false
	}
}
console.log(greaterThan(3,4))
//Q5

var greet = function(name) {
	console.log("Hello, " + name + "!") 
}

greet("Tim")
greet("Ryan")

function greet(name) {
	return "Hello, " + name + "!"
}


//Q6

function madLib(verb1, noun2, number3, adjective4) {
	return "The brown fox " + verb1 + " over the " + noun2 + ". Unfortunately, it broke its leg in " + number3 + " places. Now its leg looks " + adjective4 + "."
}

console.log(madLib("jumps","calculator",3 ,"silly"))

