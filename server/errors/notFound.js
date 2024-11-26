const {StatusCodes}=require('http-status-codes');
const customError = require('./customError');
class notFound extends customError{
    constructor(message)
    {
        super(message);
        this.StatusCode=StatusCodes.NOT_FOUND;
    }
}
module.exports=notFound;