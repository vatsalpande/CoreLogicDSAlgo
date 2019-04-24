(function IIFE() {
    function printConsole(array) {
        console.info(array);
    }
    function stitch(left, right) {
        const results = [];
        while(left.length && right.length) {
            if (left[0]<=right[0]) {
                results.push(left.shift()); //Shift pops from the front.
            } else {
                results.push(right.shift())
            }
        }
        return [...results, ...left, ...right]
    }
   function mergeSort(array) {
       if (array.length <2) {
           return array;
       }
       const length = array.length;
       const middle = Math.floor(length/2);
       const left = array.slice(0, middle);
       const right = array.slice(middle, length);
       const sortedLeft = mergeSort(left);
       const sortedRight = mergeSort(right)
       return stitch(sortedLeft, sortedRight);
   }
    const array = [2,1,4,6,8,5,0];
    const sortedArray = mergeSort(array);
    console.info(sortedArray);

}())
