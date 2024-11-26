const {StatusCodes}=require('http-status-codes');
const customError = require('./customError');
class BadRequest extends customError{
    constructor(message)
    {
        super(message);
        this.StatusCode=StatusCodes.BAD_REQUEST;
    }
}
module.exports=BadRequest;