const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirsWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn(str)}`);

console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirsWord);
transformer('JavaScript is the best!', oneWord);

// JS use callbacks all the time
const high5 = function () {
    console.log('😘😘');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);