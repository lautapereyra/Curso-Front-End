const obj1 = {
    fname: "Lautaro",
    address: "Alvear 1234, Rosario, Santa Fe",/*
    details: function(){
        console.log(this.fname+ ' is from '+ this.address);
    },*/
};

const obj2 = {
    fname: "Franco",
    address: "Paraguay 1122, San José, Santa Fe"
};

function details(hobby1, hobby2){
    console.log(this.fname+ ' is from '+ this.address + ' and his hobbyes are ' + hobby1+ ', '+ hobby2);
};

details.call(obj1, 'Football', 'Ajedrez');
details.call(obj2, 'Basquet', 'Tennis');

details.apply(obj1, ['Volley', 'CS2']);

const mybindfunction = details.bind(obj2, ['Badminton', 'MMA']);
mybindfunction();