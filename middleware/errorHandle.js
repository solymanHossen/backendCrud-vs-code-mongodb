const { constant } = require("../constants");

const errorHandlebar=(err,req,res,next)=>{
const statusCode=res.statusCode ? res.statusCode: 500
switch (statusCode) {
    case constant.VALIDATION_ERROR:
        res.json({title:'validation error',message:err.message,stackTrace:err.stack})
        break;
    case constant.NOT_FOUND:
        res.json({title:'not found',message:err.message,stackTrace:err.stack})
    case constant.UNAUTHORIZED:
        res.json({title:'this user is unauthorize',message:err.message,stackTrace:err.stack})
    case constant.FORBIDDEN:
        res.json({title:'this is the forbiden error',message:err.message,stackTrace:err.stack})
    case constant.SERVER_ERROR:
        res.json({title:'server error',message:err.message,stackTrace:err.stack})
    default:
        break;
}
}
module.exports=errorHandlebar