Mergesort is a widely used and faster sorting algorithm compared to its other counterparts
ie Bubble, insertion & selection sort

Its based on divide and conquer approach. Whenever you see divide and conquer, think recursion.
Basically, keep on dividing the array in half, till it reaches length of 1. 
An array of length 1 is sorted. 
So once you get the sorted array, start stitching them together in a way that they are sorted.
keep on going till the entire array is sorted.
Its a stable sort, which means it maintains the order the elements are received.
So if elements are equal, they will maintain their order. 
It probably won't make much sense in case of numbers, but makes a lot of sense in case of objects/strings

We can also think of this algorithm to be divided in two parts
    1) First that will keep on dividing the list till list is of size 1.
    2) Second, that will stitch the list. Will get two sorted arrays and will sort them to make final array
     

Time Complexity - O(nlogn).  
    We obviously have to compare everything once, but we don't have to compare everything to everything like we do with bubble sort. 
    Rather we just to have to compare to their local lists as we sort. Not too bad.

Space Complexity - O(n)
    Because we have to create new lists for all the entries before we start stitching them together
    
    

