const {StatusCodes}=require('http-status-codes');
const customError = require('./customError');
class unAuthenticated extends customError{
    constructor(message)
    {
        super(message);
        this.StatusCode=StatusCodes.UNAUTHORIZED;
    }
}
module.exports=unAuthenticated;