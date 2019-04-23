(function IIFE() {
    function printArray(array) {
        console.info([...array])
    }
   function insertionSort(array) {
        const arrayToSort = [...array];
        console.info('---------- Initial DataSet -----');
        printArray(array);
        //Outer loop signifies till where the list is sorted.
       //Inner loop will go only till the sorted part. If it finds something smaller, swap
       for (let i=1; i<arrayToSort.length; i++) {
           console.info('---------- Going to Pass -----');
           for (let j =0; j<i; j++) {
                if(arrayToSort[j] > arrayToSort[i]) {
                    const temp = arrayToSort[i];
                    arrayToSort[i] = arrayToSort[j];
                    arrayToSort[j] = temp;
                }
                printArray(arrayToSort);
           }
           console.info('------------------------------');
       }
       return arrayToSort;
   }
   const array = [2,1,4,6,8,5,0];
    const sortedArray = insertionSort(array);
    console.info(sortedArray);
}())
