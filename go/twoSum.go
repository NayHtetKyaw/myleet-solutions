package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	seen := make(map[int]int)

	for i, y := range nums {
		x := target - y

		if index, found := seen[x]; found {
			return []int{index, i}
		}
		seen[y] = i
	}
	return nil
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	result := twoSum(nums, target)

	fmt.Println("result:", result)
}
