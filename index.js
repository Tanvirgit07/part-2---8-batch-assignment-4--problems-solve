//task 1
// function cubeNumber(number){
//     if(typeof(number) !== 'number'){
//         return 'Please enter a number!'
//     }
//     else{
//         return Math.pow(number,3);
//     }
// }
// const num = cubeNumber(5);
// console.log(num);

//task two------------

// function matchFinder(str1,str2){
//     if(typeof(str1,str2) !== 'string'){
//         return 'Please enter a string !'
//     }
//     else{
        
//         return str1.includes(str2);
//     }

// }
// const match = matchFinder('i am tanvir ahammed tonmay', 'is')
// console.log(match);


//task three ----------

// function sortMaker(array){
//     let [a,b] = array;
//     if(a<0 || b<0){
//         return 'invalid number !'
//     }
//     else if (a === b){
//         return 'equal'
//     }
//     else if (a > b){
//         return [a,b]
//     }
//     else if (b > a){
//         return [b,a]
//     }
// }
// let result = sortMaker([4,5]);
// console.log(result);

//task four --------------

// function findAddress(obj){
//     let street = obj.street || '__';
//     let house = obj.house || '__';
//     let society = obj.society || '__';
//     console.log(street+','+house+","+society);
// }
// const result = findAddress({street:10,house:'10A',society:'Earth perfect'});

//task five ---------------

// function canPay(changeArray,totalDue){
//     if(changeArray.length == 0){
//         return 'Your array is empty!'
//     }
//     let sum = 0;
//     for(let i = 0; i < changeArray.length; i++){
//         sum = sum + changeArray[i];
//     }
//     if(sum >= totalDue){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const result = canPay([],10);
// console.log(result);

// find a large number between two number------------

// function findLarge(a,b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// const num = findLarge(5,6)
// console.log(num);

// find the height one among the number---------

// function heightOne(array){
//     let max = array[0];
//     for(let i = 0; i < array.length; i++){
//         if (array[i] > max){
//             max = array[i];
//         }
//     }
//     return max;
// }
// const num = heightOne([10,3,45,90,44,67])
// console.log(num);


// calculate the wood quantity------------

// function woodQuantity(t,c,b){
//     const table = 10;
//     const chair = 3;
//     const bed = 50;
    
//     const totalTable = t * table;
//     const totalChair = c * chair;
//     const totalBed = b * bed;

//     const totalQuantity = (totalBed + totalTable + totalChair);
//     console.log(totalQuantity);
// }
// woodQuantity(3,3,2);

// check cheapest phone price in the object of array-----------

// function cheapPhone(obj){
//     let min = obj[0];
//     for(const phone of obj){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }
// const res = cheapPhone([
//     {name:"Samsung",price:12000,camera: '12mp'},
//     {name:"iphone",price:120000,camera: '12mp'},
//     {name:"htc",price:30000,camera: '12mp'},
//     {name:"walton",price:22000,camera: '12mp'}
// ])
// console.log(res);


// find the total price of shopping-----------

// function shopping(products){
//     let total = 0;
//     for(element of products){
//         const  totalCast = element.price * element.quantity;
//         total = total + totalCast;
//     }
//     return total;
    
// }
// const result = shopping([
//     {name:'shampoo',price: 300, quantity: 3},
//     {name:'chiruni',price: 500, quantity:2},
//     {name:'shirt',price: 1200, quantity:7},
//     {name:'pant',price: 800, quantity:4},
    
// ])
// console.log(result);

// simple discount and multi layer discount-----------

// function discountSimple(products){
//     if(products <= 100){
//         const total = products * 100;
//         return total;
//     }
//     else if(products <= 200){
//         const total = products * 90;
//         return total;
//     }
//     else{
//         const total = products * 80;
//         return total;
//     }
// }
// const result = discountSimple(100);
// console.log(result);

// function layerDiscount(quantity){
//     const first100 = 100;
//     const second100 = 90;
//     const third100 = 70

//     if(quantity <= 100){
//         const  total = quantity * 100;
//         return total;
//     }
//     else if(quantity <= 200){
//         const firstPrice = 100 * 100;
//         const secondPart = quantity - 100;
//         const secondPrice = secondPart * 90;
//         const total = firstPrice + secondPrice;
//         return total; 
//     }
//     else{
//         const firstPrice = quantity * 100;
//         const secondPart = quantity * 90;
//         const thirdPart = quantity - 200;
//         const thirdPrice = thirdPart * 70;
//         const total = firstPrice + secondPrice + thirdPrice;

//     }
// }

// const result =layerDiscount(200);
// console.log(result)

// const nam = "i am tanvir ahmme tonmay";
// const arrayName = nam.split(' ');
// let minWord = arrayName[0];
// // console.log(arrayName);
// for(let i = 0; i < arrayName.length; i++){
    
//     if(arrayName[i].length < minWord.length){
//         minWord = arrayName[i];
//     }
   
// }
// console.log(minWord);


// function smallestWorld(str){
//     let minWord = str[0];
//     for(let i = 0; i < str.length; i++){
//         if(minWord.length > str[i].length){
//             minWord = str[i];
//         }
//     }
//     return minWord;
// }


// const string = smallestWorld(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
// console.log(string);


// function totalBug(a,b,c){
//     const laptop  = 35000 ;
//     const tablet  = 15000 ;
//     const mobile  = 20000 ;

//     const totalLaptopPrice = a * laptop;
//     const totalTabletPrice = b * tablet;
//     const totalMobilePrice = c * mobile;

//     const total = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
//     return total;

// }
// const result = totalBug(3,5,6);
// console.log(result);


// function findAveragePhonePrice(objects){
//     let total = 0;
//    for(singleObj of objects){
//         total = total + singleObj.price;
//     }
//     return total;
// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// const result = findAveragePhonePrice(phones);
// console.log('Total amount of phone : ',result);


function salaryCalculate(totalEmploys){
    let total = 0;
    for(let i = 0; i < employees.length; i++){
        let addIncrement = (employees[i].experience * employees[i].increment) + employees[i].starting;
        total = total + addIncrement;
    }
    return total;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = salaryCalculate(employees);
console.log('Every years pay salary : ',result);