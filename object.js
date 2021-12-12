let car = {
    name : 'Ferary',
    price : 340000,
    start: function(){
        console.log('this is my favrite car');
    }
};

car.start();
console.log(car['price']);
console.log(car.price);
car['color'] = 'blue';
console.log(car);

const name1 = 'hridoy';
const name2 = 'sagor';
 const fullName = `${name1} ${name2}`;
 console.log(fullName);