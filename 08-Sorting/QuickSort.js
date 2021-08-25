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
        if (array[leftPointer] <= array[pivot]) leftPointer++;
        if (array[rightPointer] >= array[pivot]) rightPointer--;
    }
    swap(pivot, rightPointer, array);
    quiickSortHelper(array, startIdx, rightPointer - 1);
    quiickSortHelper(array, rightPointer + 1, endIdx);

}

function swap(leftIdx, rightIdx, array) {
    let temp = array[rightIdx];
    array[rightIdx] = array[leftIdx];
    array[leftIdx] = temp;
}

const array = [8,7,3,5,12,4,0,-1,3,3,7];

console.log(quickSort(array));