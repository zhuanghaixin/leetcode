Array.prototype.insertionSort = function () {
    for(let i=1;i<this.length;i++) {
        let temp = this[i]
        let j = i
        while (j > 0 && this[j - 1] > temp) {
            this[j] = this[j - 1]
            j--
        }

        arr[j] = temp
    }

}

const arr = [3,4,5,2,1]
arr.insertionSort()
console.log(arr);
