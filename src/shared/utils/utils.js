
export function findObjectByProperty(arr, str) {
    if (str)return arr.filter(todo => todo.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
    return arr
}

export const binarySearch = (sortedArray, target) => {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const midElement = sortedArray[midIndex];

        if (midElement === target) {
            return midIndex;
        } else if (midElement < target) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
    return -1;
}

export const insertIntoSortedArray = (sortedArray, newValue) => {
    const indexToInsert = binarySearch(sortedArray, newValue);
    sortedArray.splice(indexToInsert, 0, newValue);
    return sortedArray;
}