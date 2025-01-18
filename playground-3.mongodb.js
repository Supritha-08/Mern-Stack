//use("Infosys-Mern");
 
//db.getCollectionNames();
// //fetch data of user id 3
// db.users.find({_id:"user_03"});
// //fetch data of users whose names start wuth j
// db.users.find({name :{$regex: /^j/,$options:"i"}})

//update the email of the user with id 3 as gomes@gmail.com
// db.users.updateOne({_id:"user_03"},{set:{email:"gomes@gmail.com"}});

// for checking
// db.users.find();
// db.createCollection("managers");
// db.managers.insertOne(
//     {
//         _id:"man_01",
//         name:"Bon",
//         email:"bon@gmail.com",
//         contract:123
//     }
// );
// db.managers.insertOne(
//         {
//             _id:"man_02",
//             name:"gon",
//             email:"gon@gmail.com",
//             contract:123
//         }
//     );
// db.managers.insertMany(
//     [{
//         _id :"man_03",
//         name:"ban",
//         email:"ban@gmail.com",
//         contract:125
//     },
//     { 
//         id :"man_04",
//         name:"han",
//         email:"han@gmail.com",
//         contract:126
//     },]
// );
// db.managers.find();
//db.createCollection("departments");
// db.departments.insertOne({
//     _id:"dept_01",
//     name:"Sales",
//     manager:"man_01",
//     teamLead:"user_01",
//     members:["user_01","user_02"],

// });
// db.departments.find();
// db.users.find();
// db.managers.find();


