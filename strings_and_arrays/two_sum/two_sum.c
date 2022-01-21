#include <stdio.h>

int compareInt(const void *a, const void *b)
{
	const int *pa = a;
	const int *pb = b;
	return *pa - *pb;
}
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
	qsort(nums, numsSize, sizeof(int), compareInt);
	int left = 0;
	int right = numsSize - 1;
	int *result = malloc(2 * sizeof(int));
	*returnSize = 2;
	while (left < right)
	{
		int sum = nums[left] + nums[right];
		if (sum == target)
		{
			result[0] = left;
			result[1] = right;
			return result;
		}
		else if (sum > target)
		{
			right--;
		}
		else
		{
			left++;
		}
	}
	return result;
}

int main()
{
	int *resultsize;
	int *num[4] = {2, 7, 11, 15};
	int *result = twoSum(num, 4, 9, resultsize);
	printf("start = %d end = %d", result);
	return 0;
}