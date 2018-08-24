//===========================================================================
// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. 
//i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
//===========================================================================

let result = [];
const input = [1,2,4,591,392,391,2,5,10,"2",1,"1",1,20,20];
const orderByValue = (array) => array.sort(function(a, b){
	return a[0] > b[0]
});
const ArrayFromAbove = (array) => {
	input.forEach(num => {
		let found = result.find(function(array) {
	  		return (array.length > 0 && array[0] === num) 
	  			|| (typeof(num) == 'string' && typeof(array[0]) == "string");
		});
		if(found){
			found.push(num);
			return;
		} else {
			let newArray = [];
			newArray.push(num);
			result.push(newArray);
			return;
		}
	});
}

//////

ArrayFromAbove(input);	
result = orderByValue(result);
console.log(result);

//===========================================================================
// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]
//===========================================================================

const input = [1,2,3,2];
const target = 4;

const checkSum = (array, target, index) => {
	let resp = [];
	for(let i = index; i < array.length - 1; i++){
		let sum = array[index] + array[i + 1];
		if(sum === target){
			let pair = [];
			pair.push(array[index], array[i + 1]);
			resp.push(pair);
		} 
	};
	return resp;
};

const answer = (array, target) => {
	let result = [];
	for(let i = 0; i < array.length; i++){
		let pairs = checkSum(array, target, i);
		if(pairs.length != 0){
			result.push(pairs);
		};
	};
	return result;
};
console.log(answer(input, target));


//===========================================================================
// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format 
// it returns RGB and 
// if you enter RGB color format it returns HEX.
//===========================================================================

let r = "255";
let g = "0";
let b = "0";
let hexCode = "#FF0000";

const rgbToHex = (rgbSegment) => { 
  let hex = Number(rgbSegment).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

const hexToRgb = (hex) => {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    return [r, g, b].join();
};

const fullColorHex =(r,g,b) => {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red+green+blue;
};

console.log(hexToRgb(hexCode));
console.log(fullColorHex(r,g,b));