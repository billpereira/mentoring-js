const iterationWithoutMap = (array) => {
    const newArray = []
    for (let i = 0; i<array.length;i++){
        newArray.push(array[i]*2)
    }
    return newArray
}

const iterationWithMap = (array) => array.map(element => element*2)

console.log(iterationWithMap([1,2,3,4]))
console.log(iterationWithoutMap([1,2,3,4]))