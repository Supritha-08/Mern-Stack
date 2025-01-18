//Creating a database
//use("Infosys-Mern");
//Create Collection
//db.createCollection("users");
//insert into user collection
// db.users.insertOne(
//     {
//         id:"user_01",
//         name:"John",
//         email:"john@123",
//         pswda:"john13",
//         role:"admin",
//         city:"Bangalore"
//     }
// )
// db.users.insertMany([
//     {
//         id:"user_01",
//         name:"John",
//         email:"john@123",
//         pswda:"john13",
//         role:"admin",
//         city:"Bangalore"
//     },
//     {
//         id:"user_02",
//         name:"Merry",
//         email:"Meery@123",
//         pswda:"Maeyr",
//         role:"Worker",
//         city:"Bangalore"
//     },
//     {
//         id:"user_03",
//         name:"Maria",
//         email:"maria@123",
//         pswda:"maria23",
//         role:"admin",
//         city:"Bangalore"
//     }
// ])
//To read database
// db.users.find();
//use("Infosys-Mern");


//db.getCollectionNames();
// //fetch data of user id 3
//// db.users.find({_id:"user_03"});
// //fetch data of users whose names start wuth j
 db.users.find({name :{$regex: /^j/,$options:"i"}})

//update the email of the user with id 3 as gomes@gmail.com
// db.users.updateOne({_id:"user_03"},{set:{email:"gomes@gmail.com"}});

// for checking
// db.users.find();

