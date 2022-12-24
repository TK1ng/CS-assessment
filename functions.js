function addToZero(arr) {
    let isZero = false;

    for (let i = 0; i < arr.length; i++) {

        for (let k = i + 1; k < arr.length; k++) {

            if (arr[i] + arr[k] === 0) {
                isZero = true;
                break;
            }
        }
    }

    return isZero;
}
// time complexity: O(n^2) 😬
// space complexity: O(1)

// =============================================

const hasUniqueChars = (str) => {
    let uniq = new Set(str);
    if (Array.from(uniq).join('') === str) {
        return true;
    } else {
        return false;
    }
}

// time complexity: O(n)
// space complexity: O(n)

// =============================================

function isPangram(sentence) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'];

    let count = 0;

    alphabet.forEach(letter => {
        if (sentence.toLowerCase().includes(letter)) {
            count++
        }
    })

    return count < alphabet.length ? false : true;

}

// time complexity: O(n)
// space complexity: O(1)


// =============================================

function findLongestWord(listOfWords) {
    let maxLength = 0;

    listOfWords.forEach(w => {
        if (w.length > maxLength) {
            maxLength = w.length;
        }
    })

    return maxLength;
}

// time complexity: O(n)
// space complexity: O(1)
