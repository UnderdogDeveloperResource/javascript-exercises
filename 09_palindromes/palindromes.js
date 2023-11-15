const palindromes = function (input) {
    let start = 0;    
    let end = input.length - 1;
    let punctuations = [".", ",", ":", "!", "?", " "];
    let str = input.toLowerCase();

    while (start < end) {
        // skip punctuation and whitespace
        let checkNextPair = false;
        if(Number.isInteger(str[start]) || punctuations.some(c => str[start] === c)) {
            ++start;
            checkNextPair = true;
        }

        if(Number.isInteger(str[end]) || punctuations.some(c => str[end] === c)) {
            --end;
            checkNextPair = true;
        }

        if(checkNextPair) continue;

        if(str[start] !== str[end]) { 
            return false;
        }

        ++start;
        --end;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
