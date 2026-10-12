
/*
function isPositive(number) {
    return number >= 0;
}
console.log(isPositive(10));
*/

/*
function getMaxNumber(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max
}
console.log(getMaxNumber(1, 2, 3));
*/

/*
function canQueenCaptureKing(queen, king) {
    let dx = queen.x - king.x;
    let dy = queen.y - king.y;

    return (
    queen.x === king.x || queen.y === king.y || dx === dy || dx === -dy                     
    );
}
console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 5, y: 5}));
*/

/*
function isIsoscelesTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
    }

    if (a === b || a === c || b === c) {
    return true;
    }

    return false;
}
console.log(isIsoscelesTriangle(2, 3, 2));
*/

/*
function convertToRomanNumerals(num) {
    let result = '';

    while (num >= 10) {
    result += 'X';
    num -= 10;
    }

    if (num === 9) {
    result += 'IX';
    } else if (num >= 5) {
    result += 'V';
    num -= 5;
    while (num > 0) {
        result += 'I';
        num--;
    }
    } else if (num === 4) {
    result += 'IV';
    } else {
    while (num > 0) {
        result += 'I';
        num--;
    }
    }

    return result;
}
console.log(convertToRomanNumerals(26));
*/

/*
function convertNumberToString(numberStr) {
    let result = '';
    let i = 0;

    while (i < numberStr.length) {
        let char = numberStr[i];
        let w = '';

    switch (char) {
        case '-': w = 'minus'; break;
        case '.':
        case ',': w = 'point'; break;
        case '0': w = 'zero'; break;
        case '1': w = 'one'; break;
        case '2': w = 'two'; break;
        case '3': w = 'three'; break;
        case '4': w = 'four'; break;
        case '5': w = 'five'; break;
        case '6': w = 'six'; break;
        case '7': w = 'seven'; break;
        case '8': w = 'eight'; break;
        case '9': w = 'nine'; break;
    }

    if (w !== '') {
        if (result !== '') {
        result += ' ';
        }
        result += w;
    }

    i++;
    }

    return result;
}
console.log(convertNumberToString('1950.2'));
*/

/*
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
        return false;
    }
    left++;
    right--;
    }

    return true;
}
console.log(isPalindrome('abcba'));
*/

/*
function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}
console.log(getIndexOf('qwerty', 't'));
*/

/*
function isContainNumber(num, digit) {
    if (num < 0) {
        num = -num;
    }

    if (num === 0) {
        return digit === 0;
    }

    while (num > 0) {
        let newDigit = num % 10;
        if (newDigit === digit) {
            return true;
        }
    num = (num - newDigit) / 10; 
    }

    return false;
}
console.log(isContainNumber(123450, 5));
*/

/*
function getBalanceIndex(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        if (left === total - left - arr[i]) {
            return i;
        }
    left += arr[i];
    }

    return -1;
}
console.log(getBalanceIndex([1, 2, 5, 3, 0]));
*/

/*
function getSpiralMatrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
    for (let j = 0; j < size; j++) {
        matrix[i][j] = 0;
        }
    }

    let n = 1;
    let top = 0;
    let bottom = size - 1;
    let left = 0;
    let right = size - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = n;
            n = n + 1;
        }
    top = top + 1;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = n;
            n = n + 1;
        }
    right = right - 1;

    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = n;
            n = n + 1;
        }
        bottom = bottom - 1;
    }

    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = n;
            n = n + 1;
        }
        left = left + 1;
    }
    }

    return matrix;
}
console.log(getSpiralMatrix(3));
*/

/*
function rotateMatrix(matrix) {
    let size = matrix.length;

    for (let layer = 0; layer < Math.floor(size / 2); layer++) {
    let start = layer;
    let end = size - 1 - layer;

    for (let i = start; i < end; i++) {
        let shift = i - start;

        let saved = matrix[start][i];

        matrix[start][i] = matrix[end - shift][start];
        matrix[end - shift][start] = matrix[end][end - shift];
        matrix[end][end - shift] = matrix[i][end];
        matrix[i][end] = saved;
        }
    }

    return matrix;
}
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
*/

/*
function sortByAsc(arr) {
    function partition(left, right) {
        let pivot = arr[Math.floor((left + right) / 2)];
        let i = left;
        let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return i;
    }

    function quickSort(left, right) {
    if (left < right) {
        let index = partition(left, right);
        quickSort(left, index - 1);
        quickSort(index, right);
        }
    }

    quickSort(0, arr.length - 1);
    return arr;
}
console.log(sortByAsc([2, 9, 5, -3]));
*/

/*
function shuffleChar(str, iterations) {
    let result = str;

    for (let k = 0; k < iterations; k++) {
        let leftPart = '';
        let rightPart = '';

    for (let pos = 0; pos < result.length; pos++) {
        if (pos % 2 === 0) {
            leftPart += result[pos];
        } 
        else {
            rightPart += result[pos];
        }
    }

    result = leftPart + rightPart;
    }

    return result;
}
console.log(shuffleChar('012345', 2));
*/

/*
function getNearestBigger(number) {
    let digits = [];
    let n = number;

    if (n === 0) {
        digits.push(0);
    } 
    else {
        while (n > 0) {
            digits.unshift(n % 10);
            n = (n - (n % 10)) / 10;
        }
    }

    let len = digits.length;
    let i = len - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) {
        return number;
    }

    let j = len - 1;
    while (digits[j] <= digits[i]) {
    j--;
    }

    let temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
        temp = digits[left];
        digits[left] = digits[right];
        digits[right] = temp;
        left++;
        right--;
    }

    let result = 0;
    for (let k = 0; k < len; k++) {
            result = result * 10 + digits[k];
    }

    return result;
}
console.log(getNearestBigger(12345));
*/
