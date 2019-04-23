Insertion Sort is good if the array we are trying to sort is close to sorted. 
This algorithm falls apart if the array we are trying to sort is not sorted at all.

Much Better than bubble sort in real life implementations

We will start at the beginning of the list and assume we have a sorted list of length 1.
We will then grab the second element and insert it into the correct spot in our list, either 0 or 1 index
depending if its smaller or larger than our first element. Now we have sorted list of length 2.
We will keep on going the similar way and keep on inserting new elements in its correct place

Worst case complexity is O(n^2). However, if the list is already sorted or close to sorted it can be O(n)
Space Complexity - O(1)

