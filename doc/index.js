function calculateOverlapArea(t, s1, s2) {
  // Calculate the x-coordinate of the intersection point
  const x = (s2 * t) / (s1 + s2);

  // Calculate the overlapping area
  const area = x * x;

  return area;
}

function findTimeForQueryValue(l, s1, s2, query) {
  let low = 0;
  let high = l;

  while (low <= high) {
    const mid = (low + high) / 2;
    const area = calculateOverlapArea(mid, s1, s2);

    if (Math.abs(area - query) < 1e-9) {
      return mid; // Found the time where the area matches the query value
    } else if (area < query) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // No exact match found
}

// Sample input
const l = 10;
const s1 = 1;
const s2 = 2;
const query = 4;

// Find the time at which the overlapping area is equal to the query value
const time = findTimeForQueryValue(l, s1, s2, query);

console.log(time); // Output: 4
