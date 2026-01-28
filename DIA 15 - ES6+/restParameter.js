const add = (...a) => {

    //console.log(a + b + c);
    console.log(a);

    let result = 0;
    for (num of a){
        result = result + num;
    }
    console.log(result);
};


add(1, 2, 3);
add(1, 2, 3, 4, 5,6,7,8,9);