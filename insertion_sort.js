function insertion_sort(arrNumbers) {
    var j = 0
	    , arr = arrNumbers
	    , len = arr.length
	    , i = null
	    , key = null

    for (; j < len; j++) {
        key = arr[j];
        i = j - 1;
        while (i > -1 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = key;
    }
    return arr
}