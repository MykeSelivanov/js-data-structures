function quickSort(array) {
    quiickSortHelper(array, 0, array.length - 1);
    return array;
}

function quiickSortHelper(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return array;
    const pivot = startIdx;
    let leftPointer = startIdx + 1;
    let rightPointer = endIdx;

    while (rightPointer >= leftPointer) {
        if (array[leftPointer] > array[pivot] && array[rightPointer] < array[pivot]) {
            swap(leftPointer, rightPointer, array);
        }
    }
}

function swap(leftIdx, rightIdx, array) {
    let temp = array[rightIdx];
    array[rightIdx] = array[leftIdx];
    array[leftIdx] = temp;
}