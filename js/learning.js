// function processData(myArray) {
//     myArray.reduce(function(acc, curr) {
//         if(curr > acc) {
//             if (myArray.indexOf(curr) === myArray.length){
//                 console.log (acc)
//             } else {
//                 console.log (curr)
//             }
//         }else {
//             console.log(acc)
//         }
//     })
// }
// processData([2, 3, 5, 6,7,8])



// function spinWords(string){
//     let words = string.split(" ")
//     let filtered = words.map(function(ele) {
//         if (ele.length >= 5) {
//             return (ele.split("").reverse().join("")) 
//         }else {
//             return(ele) 
//         }
//     })
//     let result = (filtered.join(" "))
//     return result
// }


// console.log(spinWords("Hey fellow warriors"))

// function solution(str, ending){
//     if(str.endsWith(ending)){
//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }
// solution("abs", "bs")

// function palindromize(number){
//     let count = 0
//     let myNumber = number
//     let reversed = number.toString().split("").reverse().join("")
//     while(reversed !== number){
//         myNumber += reversed
//         count++
//     } 
//     return [count, +myNumber];
// }
// console.log(palindromize(750))

