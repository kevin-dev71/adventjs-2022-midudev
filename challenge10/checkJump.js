function checkJump(heights) {
  const isArraySortedInAscendingOrder = (arr) => {
    if (arr.length < 1) return false;
    return arr.every((val, i) => i === arr.length - 1 || val <= arr[i + 1]);
  };
  const isArraySortedInDescendingOrder = (arr) => {
    if (arr.length < 1) return false;
    return arr.every((val, i) => i === arr.length - 1 || val >= arr[i + 1]);
  };
  const maxHeight = Math.max(...heights);
  const maxHeightIndex = heights.indexOf(maxHeight);
  const firstPart = heights.slice(0, maxHeightIndex);
  const secondPart = heights.slice(maxHeightIndex + 1);

  return (
    isArraySortedInAscendingOrder(firstPart) &&
    isArraySortedInDescendingOrder(secondPart)
  );
}
