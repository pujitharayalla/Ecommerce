EMPLOYEECONTROLLER.JS
var employeeModel=require('./employeeModel');
var createUserControllerFn=async(req,res)=>
{try
  {
    const body =req.body
    const employeeModelData=new employeeModel()
    employeeModelData.name =body.name
    employeeModelData.address=body.address
    employeeModelData.phone=body.phone
    await employeeModelDatasave()
    res.status(200).send({
      "status":true,"message":"Employee created successfully"
    });
  }catch(error)
  {  res.status(400).send(error);

}}
module.exports={ createdUserControllerFn};

var mongoose=require =require('mongoose');
var Schrma = mongoose.Schema;
var employeeSchema=new Schema({
  name;{
    type:String
    required:true
  }
})