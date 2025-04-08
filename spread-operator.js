/*
spread operator ("") is an operator used to expand or unpack the elements of a iterable 
(arrays, string, obj...)

for example
*/
const array = [1, 2, 3]
const newArray = [...array, 4, 5, 6]

console.log(newArray)
//output: 1, 2, 3, 4, 5, 6

/*
what we do was expad the aray:
...array = 1, 2, 3

and add it to the new array
*/