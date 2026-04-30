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
    return max_global