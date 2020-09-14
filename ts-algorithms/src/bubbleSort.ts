
const bubbleSort=(arr:number[])=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let bigger=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=bigger
            }
        }
    }
    return arr

}

console.log(bubbleSort([-10, 20, 46, 24, 2]));

