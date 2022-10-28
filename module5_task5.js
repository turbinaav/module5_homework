var array = [5, 12, 7, 4, 28];
arr = array.length;
console.log(`В массиве ${arr} элементов`);

array.forEach(function(item, index, array) {
  console.log(item);
});