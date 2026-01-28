let  fruits1 = ["Banana", "Manzana"];
let  fruits2 = ["Ciruela", "Uva"];

const combine = () => {
    let combinedfruits = [fruits1[0], fruits1[1], fruits2[0], fruits2[1]];
    let combinedfruits1 = [...fruits1, ...fruits2];

    let details =`Combined Fruits: ${combinedfruits1}`;

    console.log(details);
};

combine();