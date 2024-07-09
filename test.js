const myObj={
    name:'Zeeshan'
}

const myObj2={
    name:'Shama',
    printName: function(){
        console.log(this.name)
    }
}


const test=myObj2.printName.call(myObj)


