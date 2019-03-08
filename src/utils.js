// Say Hello
const sayHello = () => {
    console.log('Hello')
}
export { sayHello }

// *************************************************************
// What You Need To Know 

// *************************************************************
// Loops & Arrays 

// Question One 
// Write function that prints the contents of an array. Put a space " " between each element. Assume each element is a single string or number. Prin the results to the console.
// For example given the the array [33, 12, 74, 8] Your function should print:
// 33 12 74 8

const logArr = (arr) => {
    let output = ''
    for(let i in arr) {
        output += arr[i] + ' ' 
    }
    console.log(output)
}
export { logArr }
//logArr([33, 12, 74, 8])

// Question Two 
// Modify the previous function to handle one dimensional or two dimensional arrays.
// In the case of a one dimensional array the results should be the same as above.
// When the array is two dimensional each sub array should print its contents on the same line. 
//For example given [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] it should print
// 1 2 3 
// 4 5 6 
// 7 8 9
// If the given array is: [11, 22, 33] your function should print:
// 11 22 33

const log2dArr = (arr) => {
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
          logArr(arr[i]);
        } else {
          console.log(arr[i])
        }
    }
}
export { log2dArr }
//Multi Dimensional Array
//log2dArr([1, 2, 3, 4, 5, 6, 7, 8, 9])
//Single Array
//log2dArr([11, 22, 33])
