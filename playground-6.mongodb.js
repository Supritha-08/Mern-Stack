// use("Infosys-Mern");
//Write an aggregate function to display details of departments with id dept_01
// db.departments.find();

//Mangodb Aggregate pipeline
// db.departments.aggregate([{
//     $match: {
//       _id:"dept_01",
//     },
// },
// ]);

// Write an aggreagate function to display the manager of department 01
// db.departments.aggregate([
    
//     {
//         $match: {
//       _id:"dept_01",
//     },
// },
//     {
//         $lookup:{
//             from:"managers",
//             localField:"manager",
//             foreignField:"_id",
//             as:"manager_details",
//         }
//     },
//     {
//         $unwind:"$manager_details",
//     },
    
// ]);
//db.managers.find();
db.departments.find();
// db.managers.aggregate([
    
//     {
//         $match: {
//       _id:"man_01",
//     },
// },
//     {
//         $lookup:{
//             from:"us",
//             localField:"manager",
//             foreignField:"_id",
//             as:"manager_details",
//         }
//     },
//     {
//         $unwind:"$manager_details",
//     },
    
// ]);
