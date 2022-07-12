// Function that returns the largest of three values
// getLargest(3, 5, 2) -> 5

const getLargest = (a, b, c) => {
    return Math.max(a, b, c);
}

// Export the function so it's available to other files
module.exports = getLargest;