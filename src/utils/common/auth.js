const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { serverConfig } = require("../../config")
function comparePassword(plainPassword, hashPassword){
    try {
        const compare = bcrypt.compareSync(plainPassword, hashPassword)
        return compare
    } catch (error) {
        throw error
    }
}

function createToken(user){
    try {
        const token = jwt.sign(user, serverConfig.JWT_SECRET, {
            expiresIn : serverConfig.JWT_EXPIRY
        })
        return token
    } catch (error) {
        throw error
    }
}

module.exports = {
    comparePassword,
    createToken
}
