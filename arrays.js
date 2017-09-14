var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  [element,...array]
}
function addElementToEndOfArray(array, element) {
  [...array,element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
