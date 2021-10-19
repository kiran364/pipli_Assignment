const userPolicy = require('../Models/userPolicyModel')
const csvtojson = require("csvtojson");



// insert data from csv to database 
exports.addData = (req, res) => {
    try{
        csvtojson()
        .fromFile("data-sheet.csv")
        .then( async (csvData) => {
            const saveData = await userPolicy.insertMany(csvData);
            if(saveData){
                console.log('record inserted');
                res.status(201).send('Record Inserted in database from csv is successful')
            }
           
         // console.log(csvData);
        })

    }catch(err){

        res.status(400).send(err);

    }

}


//Search controller to find policy info with the help of username.
exports.searchData = async (req, res) => {
    const {username} = req.body;
    try{
        const searchData = await userPolicy.find({firstname: username},{ 
            firstname:1, 
            agent:1, policy_mode:1, policy_number:1, 
            policy_type:1, policy_start_date:1, policy_end_date:1, _id:0
        });
        console.log(searchData)
        if(searchData.length != 0){
            res.status(200).json(searchData);
        }else{
            res.status(401).send(`user not found with name ${username}`)
        }
       
    }catch(err){
        res.status(400).send(err);
    }
}


exports.aggregateData = async (req, res) => {
    const {username} = req.body;
    try{
        const data = await userPolicy.aggregate([
            {$match: {firstname: username}},
            {$group: {}},
        ]);
        res.status(201).json(data);

    }catch(err){
        res.status(400).send(err);
    }
}
