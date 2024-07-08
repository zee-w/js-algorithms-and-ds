// remove string only keep numbers in array



function filterArray(arr){
    return arr.filter((x)=>{
        return typeof x ==='number'
    })
}


console.log(filterArray([1,2,3,'test']))