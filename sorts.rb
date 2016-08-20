def merge_sort(array)
  array if array.length <= 1

  mid = (array.length / 2).floor
  left = merge_sort(array[0...mid])
  right = merge_sort(array[mid..-1])
  merge(left, right)
end

def merge(left, right)
  if left.empty?
    right
  elsif right.empty?
    left
  elsif left.first < right.first
    left.first + merge(left[1..-1], right)
  elsif right.first < left.first
    right.first + merge(right[1..-1], left)
  end
end
arr = [5,7,8,6,2,7,88,4,3,2,4,6,55,4,332,7,25,75,4,55,446,8,774,42,26,54]
p merge_sort(arr)
