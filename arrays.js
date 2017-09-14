var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
function addElementToBeginningOfArray(array, element) {
  [element,...array]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}
function addElementToEndOfArray(array, element) {
  [...array,element]
}
