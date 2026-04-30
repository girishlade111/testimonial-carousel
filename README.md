from typing import List
def find_maximum_subarray_sum(arr: List[int]) -> int:
    """
    You are given an array of integers. Your task is to find the maximum sum of a
    contiguous subarray within the array. The subarray must contain at least one
    element. As a reminder, your code has to be in python
    """
    # implementation using Kadane's Algorithm
    if not arr:

        # Handle the case where the array is empty, though the problem states it must contain at least one element
        raise ValueError("Array must contain at least one element")
    # Initialize the maximum sum ending at the current position and the maximum sum found so far
    max_ending_here = arr[0]
    max_so_far = arr[0]
    # Iterate through the array starting from the second element
    for num in arr[1:]:
        # Update the maximum sum ending at the current position
        max_ending_here = max(num, max_ending_here + num)
        # Update the maximum sum found so far
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far