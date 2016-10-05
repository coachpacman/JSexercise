function max(num1, num2) {
	if (num1 > num2) {
		return num1
	}
	else {
		return num2
	}
}

console.log(max(10,11))

///

function maxOfThree(arg1, arg2, arg3) {
	return Math.max(arg1, arg2, arg3)
}

console.log(maxOfThree(4,5,6))

//

function isVowel(char) {
	var vowels = ["a", "e", "i", "o", "u", "y"]
	if (vowels.indexOf(char) !== -1) {
		return true
	}
	else {
		return false
	}
}

console.log(isVowel("e"))

///

//Tim

function isVowel(x) {
	var vowels = ["a", "e", "i", "o", "u", "y"]
	for(var i = 0; i < vowels.length; i +=1) {
		if(vowels[i] === x) {
			return true
		} 
		else {
			return false
		}
	}
}

console.log(isVowel("a"))

////

function translate(phrase) {	
	var newWord = '';
	var vowels = ["a", "e", "i", "o", "u", "y"]
	for(var i = 0; i < phrase.length; i += 1) {
		
		if(vowels.indexOf(phrase[i]) === -1) {
			newWord += phrase[i] + "o" + phrase[i];
		}

		else {
			newWord += phrase[i];
		}
	}
	return newWord
}
console.log(translate("tim"))

////

function reverse(word) {
	var newWord = ""
	for(var i = word.length-1; i > -1; i -= 1){
		newWord += word[i]
	}
	return newWord
}

console.log(reverse("tim"))



