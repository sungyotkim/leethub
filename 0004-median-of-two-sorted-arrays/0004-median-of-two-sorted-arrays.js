/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let mid = Math.floor((n + m) / 2);
  let even = false;
  
  if ((n + m) % 2 === 0) even = true;
  
  const arr = [];
  
  for (let i = 0; i <= mid; i++) {
    if (nums1.length === 0) {
      arr.push(nums2.shift());
    } else if (nums2.length === 0) {
      arr.push(nums1.shift());
    } else {
      if (nums1[0] < nums2[0]) {
        arr.push(nums1.shift())
      } else {
        arr.push(nums2.shift())
      }
    }
  }
  
  console.log(even)
  
  if (even) {
    return (arr[arr.length - 1] + arr[arr.length - 2]) / 2
  } else {
    return arr[arr.length - 1];
  }
};