import React, { useState, useEffect } from "react"


function App() {

  // const [nums, setNums] = useState([1, 2, 4])

  const [nums, setNums] = useState(
    JSON.parse(localStorage.getItem('nums')) || [1, 2, 4]
  );



  useEffect(() => {

    localStorage.setItem("nums", JSON.stringify(nums))

  }, [nums])

// GENERATING NON REPEATING NUMBERS
// https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js 
  function handleAddClick() {
    // let ranNums = [];
    // let i = nums.length;
    // let j = 0;

    // while (i--) {
    //   j = Math.floor(Math.random() * (i+1));
    //   ranNums.push(nums[j]);
    //   nums.splice(j,1);
    // }

    setNums([...nums, Math.random()])

  }

// GENERATING NON REPEATING NUMBERS
// https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js 
//   var nums = [1,2,3,4,5,6,7,8,9,10],
//     ranNums = [],
//     i = nums.length,
//     j = 0;

// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(nums[j]);
//     nums.splice(j,1);
// }



  return (

    <button className="btn btn-primary m-5" onClick={handleAddClick}>

      Add Random Number

    </button>

  )

}


export default App