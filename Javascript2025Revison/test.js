let count = 0;
const nums = [0, 1, 2, 3, 4]

nums.forEach(num => {
    if (num) {
        count = count + 1;
    }
})

console.log(count);
