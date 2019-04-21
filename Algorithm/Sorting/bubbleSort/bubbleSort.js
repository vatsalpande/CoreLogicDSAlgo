(function IIFE() {
    function printConsole(array) {
        console.info([...array]);
    }

   function bubbleSort(dataSet) {
        let sortNotNeeded = false;
        console.info('Initial Data Set is')
        printConsole(dataSet);
        const array = [...dataSet];
        while(!sortNotNeeded) {  // Will continue running til no swapping is needed
            console.info('New Pass Starts')
            let swapped = false;
            for (let i =0; i< array.length; i++) {
                if (array[i] > array[i+1]) {
                    [array[i+1], array[i]] = [array[i], array[i+1]];
                    swapped = true;
                }
                printConsole(array);
            }
            if (!swapped) {
                sortNotNeeded = true;
            }
        }
        return array;
   }
   bubbleSort([4,65,3,1,5])
}())
