function mergeSort(array) {
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let leftSubarray = array.slice(0, middle);
    let rightSubarray = array.slice(middle);
    return mergeHelper(mergeSort(leftSubarray), mergeSort(rightSubarray));
}

function mergeHelper(leftSubarray, rightSubarray) {
    const sorted = [];
    let inSortedIdx = 0;
    let inLeftIdx = 0;
    let inRightIdx = 0;

    while (inLeftIdx < leftSubarray.length && inRightIdx < rightSubarray.length) {
        if (leftSubarray[inLeftIdx] <= rightSubarray[inRightIdx]) {
            sorted[inSortedIdx] = leftSubarray[inLeftIdx];
            inSortedIdx++;
            inLeftIdx++;
        } else {
            sorted[inSortedIdx] = rightSubarray[inRightIdx];
            inSortedIdx++;
            inRightIdx++;
        }
    }
    while (inLeftIdx < leftSubarray.length) {
        sorted[inSortedIdx] = leftSubarray[inLeftIdx];
        inSortedIdx++;
        inLeftIdx++;
    }
    while (inRightIdx < rightSubarray.length) {
        sorted[inSortedIdx] = rightSubarray[inRightIdx];
        inSortedIdx++;
        inRightIdx++;
    }
    return sorted;
}

const array = [8, 7, 3, 5, 12, 4, 0, -1, 3, 3, 7];

console.log(quickSort(array));