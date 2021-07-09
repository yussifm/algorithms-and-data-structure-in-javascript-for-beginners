const binarySearch = (list, target) => {
    var min = 0; // equal to the first element in the list
    var max = list.length - 1; // equal to the last element in the list 

    while (min <= max) {
        var guess = Math.floor((min + max) / 2) // 2;
        if (list[guess] === target) {

            return guess;
        }
        else if (list[guess] < target) {
            min = guess + 1;
        }
        else { max = guess - 1; }
    }

    return "Not Found in list";
}

list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(binarySearch(list, 67));