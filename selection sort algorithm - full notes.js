// selection sort algorithm

// Flatiron School method

// let unsortedArray = [5, 1, 4, 0, -1, 2, 3];
// const minAndRemove = (array) => {
// 	let min = array[0];
// 	let minIndex = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] < min) {
// 			min = array[i];
// 			minIndex = i;
// 		} 
// 	}
// 	array.splice(minIndex, 1);
// 	return min;
// }

// minAndRemove(unsortedArray)

// const selectionSort = (array) => {
// 	let newMin;
// 	let sorted = [];
// 	while (array.length != 0) {
// 		newMin = minAndRemove(array);
// 		sorted.push(newMin);
// 		console.log(sorted)
// 	}
// 	return sorted;
// }
// console.log(selectionSort(unsortedArray));

// ######################### A simpler way ###############################

// this runs in Quadratic Time - O(n^2)

// let unsortedArray = [5, 6, -1, 1, 3];

// selectionSort = (array) => {
	
// 	for (i = 0; i < array.length - 1; i++) {
// 		let minIndex = i;
// 		for (j = i; j < array.length; j++) {
// 			if (array[j] < array[minIndex]) {
// 				minIndex = j;
// 			}
// 		}
// 		const temp = array[i];
// 		array[i] = array[minIndex];
// 		array[minIndex] = temp;
// 	}
// 	return array
// }
// selectionSort(unsortedArray)

// ######################### Clean and Pure Function (doesn't mutate) ###############################

// let unsortedArray = [5, -2, 1, 4, 0, -1, 2];
let unsortedArray = [1, 3, 0, -1, 2];
	
const selectionSort = (array) => {

	const arr = array.slice(); 
	
	for (i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (j = i; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
				console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}, arr[minIndex]: ${arr[minIndex]}, arr: ${arr}`);
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
		console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}, arr[minIndex]: ${arr[minIndex]}, arr: ${arr}`);
	}
	return arr
}
selectionSort(unsortedArray)

// console.log(selectionSort(unsortedArray))
// document.getElementById("root").append(selectionSort(unsortedArray))



// this works by scanning through the array and finding the lowest value.

// algorithm.js:70 arr[i]: 1, arr[j]: 0, arr[minIndex]: 0, arr: 1,3,0,-1,2
// algorithm.js:70 arr[i]: 1, arr[j]: -1, arr[minIndex]: -1, arr: 1,3,0,-1,2
// algorithm.js:75 arr[i]: -1, arr[j]: undefined, arr[minIndex]: 1, arr: -1,3,0,1,2
// algorithm.js:70 arr[i]: 3, arr[j]: 0, arr[minIndex]: 0, arr: -1,3,0,1,2
// algorithm.js:75 arr[i]: 0, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,3,1,2
// algorithm.js:70 arr[i]: 3, arr[j]: 1, arr[minIndex]: 1, arr: -1,0,3,1,2
// algorithm.js:75 arr[i]: 1, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,3,2
// algorithm.js:70 arr[i]: 3, arr[j]: 2, arr[minIndex]: 2, arr: -1,0,1,3,2
// algorithm.js:75 arr[i]: 2, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3
// algorithm.js:75 arr[i]: 3, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3










