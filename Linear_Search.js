"use strict";
const linearSearch = (list, target) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i] === target) {
			console.log(i, target);
			break;
		}
	}
}

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
linearSearch(list, 6);