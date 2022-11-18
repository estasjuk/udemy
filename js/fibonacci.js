function fib(number) {
    if (typeof number !== 'number' || number === 0 || !Number.isInteger(number))
    return "";
    else if (number === 1) 
    return "0";
    else {
        const array = [0, 1];
        for (let i = 2; i < number; i +=1) {
            array[i] = array[i-2] + array[i-1];
        }
        return array.join(" ");
    }
    
}
console.log(fib(5));

