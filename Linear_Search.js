
function LinearSearch(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            console.log(i);
            break;
        }
        else console.log("Target not found");
        break;
   }
}

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
LinearSearch(list, 11);