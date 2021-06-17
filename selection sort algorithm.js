let unsortedArray = [1, 3, 0, -1, 2];

const selectionSort = (array) => {

    // const arr = array.slice();
    // const arr = [...array];
    const arr = Array.from(array);

	for (i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (j = i; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				console.log(`before setting minIndex(${arr[minIndex]}), arr[j]: ${arr[j]},`);
				minIndex = j;
				console.log(`after setting minIndex(${arr[minIndex]}), arr[j]: ${arr[j]},`);
				console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}, arr[minIndex]: ${arr[minIndex]}, arr: ${arr}`);
				console.log(`- - - - - - - `);
			}
		}
		console.log(`before swap: arr[i] ${arr[i]}, arr[minIndex]: ${arr[minIndex]}`);
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
		console.log(`arr[i]: ${arr[i]}, arr[j]: ${arr[j]}, arr[minIndex]: ${arr[minIndex]}, arr: ${arr}`);
		console.log(`- - - - - - - `);
	}
	return arr
}
selectionSort(unsortedArray)

// this works by scanning through the array and finding the lowest value.

// algorithm.js:10 arr[i]: 1, arr[j]: 0, arr[minIndex]: 0, arr: 1,3,0,-1,2
// algorithm.js:10 arr[i]: 1, arr[j]: -1, arr[minIndex]: -1, arr: 1,3,0,-1,2
// algorithm.js:14 arr[i]: -1, arr[j]: undefined, arr[minIndex]: 1, arr: -1,3,0,1,2
// algorithm.js:10 arr[i]: 3, arr[j]: 0, arr[minIndex]: 0, arr: -1,3,0,1,2
// algorithm.js:14 arr[i]: 0, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,3,1,2
// algorithm.js:10 arr[i]: 3, arr[j]: 1, arr[minIndex]: 1, arr: -1,0,3,1,2
// algorithm.js:14 arr[i]: 1, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,3,2
// algorithm.js:10 arr[i]: 3, arr[j]: 2, arr[minIndex]: 2, arr: -1,0,1,3,2
// algorithm.js:14 arr[i]: 2, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3
// algorithm.js:14 arr[i]: 3, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3

/*

before setting minIndex(1), arr[j]: 0,
selection sort algorithm.js:13 after setting minIndex(0), arr[j]: 0,
selection sort algorithm.js:14 arr[i]: 1, arr[j]: 0, arr[minIndex]: 0, arr: 1,3,0,-1,2
selection sort algorithm.js:15 - - - - - - - 

selection sort algorithm.js:11 before setting minIndex(0), arr[j]: -1,
selection sort algorithm.js:13 after setting minIndex(-1), arr[j]: -1,
selection sort algorithm.js:14 arr[i]: 1, arr[j]: -1, arr[minIndex]: -1, arr: 1,3,0,-1,2
selection sort algorithm.js:15 - - - - - - - 

selection sort algorithm.js:18 before swap: arr[i] 1, arr[minIndex]: -1
selection sort algorithm.js:20 arr[i]: -1, arr[j]: undefined, arr[minIndex]: 1, arr: -1,3,0,1,2
selection sort algorithm.js:21 - - - - - - - 

selection sort algorithm.js:11 before setting minIndex(3), arr[j]: 0,
selection sort algorithm.js:13 after setting minIndex(0), arr[j]: 0,
selection sort algorithm.js:14 arr[i]: 3, arr[j]: 0, arr[minIndex]: 0, arr: -1,3,0,1,2
selection sort algorithm.js:15 - - - - - - - 

selection sort algorithm.js:18 before swap: arr[i] 3, arr[minIndex]: 0
selection sort algorithm.js:20 arr[i]: 0, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,3,1,2
selection sort algorithm.js:21 - - - - - - - 

selection sort algorithm.js:11 before setting minIndex(3), arr[j]: 1,
selection sort algorithm.js:13 after setting minIndex(1), arr[j]: 1,
selection sort algorithm.js:14 arr[i]: 3, arr[j]: 1, arr[minIndex]: 1, arr: -1,0,3,1,2
selection sort algorithm.js:15 - - - - - - - 

selection sort algorithm.js:18 before swap: arr[i] 3, arr[minIndex]: 1
selection sort algorithm.js:20 arr[i]: 1, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,3,2
selection sort algorithm.js:21 - - - - - - - 

selection sort algorithm.js:11 before setting minIndex(3), arr[j]: 2,
selection sort algorithm.js:13 after setting minIndex(2), arr[j]: 2,
selection sort algorithm.js:14 arr[i]: 3, arr[j]: 2, arr[minIndex]: 2, arr: -1,0,1,3,2
selection sort algorithm.js:15 - - - - - - - 

selection sort algorithm.js:18 before swap: arr[i] 3, arr[minIndex]: 2
selection sort algorithm.js:20 arr[i]: 2, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3
selection sort algorithm.js:21 - - - - - - - 

selection sort algorithm.js:18 before swap: arr[i] 3, arr[minIndex]: 3
selection sort algorithm.js:20 arr[i]: 3, arr[j]: undefined, arr[minIndex]: 3, arr: -1,0,1,2,3
selection sort algorithm.js:21 - - - - - - - 

*/
