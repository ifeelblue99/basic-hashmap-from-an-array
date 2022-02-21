/*
  simple hash map from an number array: ["number":"count of num in the array"]
*/

let mArray = [2,2,1,3,4,5,1,1,2,2]

function hasMajority(arr){
  
  let hMap = {}
  
  arr.forEach(el=>{
    hMap[`${el}`] = parseInt(hMap[`${el}`], 10)||0
    hMap[`${el}`]+=1
  })

  
  return hMap
}


console.log(hasMajority(mArray));
