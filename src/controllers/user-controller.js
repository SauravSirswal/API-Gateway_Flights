const  { ErrorResponse, SuccessResponse } = require("../utils/common")
const { UserService } = require("../services")
const { StatusCodes } = require("http-status-codes")

async function signUp(req, res){
    try {
        const user = await UserService.create({
        email : req.body.email,
        password : req.body.password
    })
    SuccessResponse.data = user
    return res.status(error.statusCode).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    signUp
}