//插入排序   依次比较前i个元素的大小
function insertBubble(array){
  let length = array.length;
  for(let i = 0;i < length;i++){
    let j = i;
    let temp = array[i] //记录第i个数的值，如果小于前面的数字换顺序
    while(j > 0 && temp < array[j-1]){
      array[j] = array[j-1];
      j--;
    }
    array[j] = temp; //直到j=0或者 array[j]>=array[j‐1]为止
  }
  return array
}
let array = [6,7,4,3,5,2,1]
insertBubble(array)