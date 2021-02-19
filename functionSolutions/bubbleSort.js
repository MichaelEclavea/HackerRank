//--- BUBBLE SORT HAS AN O(n2) -- BAD FOR LARGE DATA SORT


function countSwaps(arr) {
  let swap = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swap++
      }
    }
  }
  let ans1 = `Array is sorted in ${swap} swaps.`
  let ans2 = `First Element: ${arr[0]}`
  let ans3 = `Last Element: ${arr[arr.length - 1]}`
  console.log(ans1)
  console.log(ans2)
  console.log(ans3)
}
