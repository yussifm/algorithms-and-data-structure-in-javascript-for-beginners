function binarySearch(array, numberToFind, start, end) {

	if (end <= start) {
		return -1;
	}

	let middle = Math.floor((start + end) / 2);

	if (array[middle] === numberToFind) {
		return middle;
	} else if (array[middle] < numberToFind) {
		return binarySearch(array, numberToFind, middle + 1, end);
	} else {
		return binarySearch(array, numberToFind, start, middle - 1);
	}
}

let numbers = [2, 6, 8, 9, 10];
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let toFind = 2;
let findNumber = binarySearch(list, toFind, 0, numbers.length - 1);
console.log(findNumber);