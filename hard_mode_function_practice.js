// ---------------------------
// The Arrays You Will Work With
// ---------------------------
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



// ---------------------------
// 1. Find largest number
// ---------------------------
function findLargestNumber(input){
var largest = 0;
  for(count = 0; count < input.length; count++){
    if(input[count] > largest){largest = input[count]}
  }
  return largest;
}


// ---------------------------
// 2. Find longest string
// ---------------------------

function findLongestString(input){
	var longest = "";
  for(count = 0; count < input.length; count++){
		if(input[count].length > longest.length){
			longest = input[count];
		}
	}
	return longest;
}


// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEvenNumbers(input){
	var evens = [];
	for(count = 0; count < input.length; count++){
		if(input[count] % 2 === 0){
			evens.push(input[count])
		}
	}
	return evens;
}

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOddNumbers(input){
	var odds = [];
	for(count = 0; count < input.length; count++){
		if(input[count] % 2 !== 0){
			odds.push(input[count])
		}
	}
	return odds;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
