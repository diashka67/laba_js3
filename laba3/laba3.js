/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**1
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
    return number >= 0;
}

/**2
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max
}

/**3
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
    let dx = queen.x - king.x;
    let dy = queen.y - king.y;

    return (
    queen.x === king.x || queen.y === king.y || dx === dy || dx === -dy                     
    );
}

/**4
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
    }

    if (a === b || a === c || b === c) {
    return true;
    }

    return false;
}
/**5
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
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

/**6
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
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

/**7
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
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

/**8
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}

/**9
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
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

/**10
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
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

/**11
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
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

/**12
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
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

/**13
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
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

/**14
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
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

/**15
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
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

