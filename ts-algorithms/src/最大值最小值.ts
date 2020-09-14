interface Array<T> {
    getMax(): void
}
Array.prototype.getMax=function(){
    let max=this[0]
    for(let i=1;i<this.length;i++){
        if(max<this[i]){
            max=this[i]
        }
    }
    console.log(max)
}

const arr=[3,4,5,1,2]
arr.getMax()

// console.log(arr.getMax())

