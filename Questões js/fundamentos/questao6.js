function numeroMaisFrequente(arr) {
    let freq = {};
    let maxNum = arr[0];
    let maxCount = 0;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(numeroMaisFrequente([1, 2, 3, 2, 1, 2]));