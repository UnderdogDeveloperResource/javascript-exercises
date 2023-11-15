const fibonacci = function(position) {    
    if (position < 0) return "OOPS";    
    if(position === 0) return 0;

    let prev = 1;
    let currentFib = 1;    
    for(let i = 2; i < position; ++i) {
        const newFib = (currentFib) + (prev)
        
        prev = currentFib;
        currentFib = newFib;
    }

    return currentFib;
};

// Do not edit below this line
module.exports = fibonacci;
