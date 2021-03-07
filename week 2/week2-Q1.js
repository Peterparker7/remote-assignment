function max(numbers){
    // your code here, for-loop method preferred
    let bigger =numbers[0];
    for (i=0;i<numbers.length;i++){
        
        if(numbers[i]>bigger){
            bigger = numbers[i]
        }
    }
    return bigger;
}

max([1, 2, 4, 5]); // result to 5 
max([5, 2, 7, 1, 6]); // result to 7