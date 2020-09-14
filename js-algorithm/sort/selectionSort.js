Array.prototype.selectionSort = function () {
    for(let i=0;i<this.length-1;i++) {
        let indexOfMin = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexOfMin]) {
                indexOfMin = j
            }
        }

        if(indexOfMin!==i){
            let temp = this[indexOfMin]
            this[indexOfMin] = this[i]
            this[i] = temp
        }

    }
}

const arr = [2, 3, 5, 4, 1]
arr.selectionSort()
console.log(arr);
