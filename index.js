const result = () => {

  let arr = [0, 1, 2, 3, 4, 5, 6, 8];

  let array1 = [0, 1, 2];
  let array2 = [0,4,8];
  let array3 = [3,4,5];
  let array4 = [6,7,8];
  console.log ("hellow")  
  // let allExist = array1.every(value => arr.includes(value));

  if (array1.every(value => arr.includes(value))) {
    console.log("All values (0, 1, 2) exist in the array.");
  }

  else if (array2.every(value => arr.includes(value))) {
    console.log("All values (0, 5, 8) exist in the array.");
  }

  else if (array3.every(value => arr.includes(value))) {
    console.log("All values (1, 2, 5) exist in the array.");
  }

  else if (array4.every(value => arr.includes(value))) {
    console.log("All values (1, 2, 5) exist in the array.");
  }

  else {
    console.log("Not all values (1, 2, 5) exist in the array.");
  }

}
// result()