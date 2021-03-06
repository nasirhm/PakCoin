// This helper file conatins a function that translates error objects into 
// meaningful, user-oriented error messages
function translateError(err){
    var message
    //console.log('debug')
    //console.log(err.errors)
    // Validation Errors:
    // Must be checked that 'errors' key is contained in 'err' so that other errors don't crash here
    // Once checked^ then check which field caused error and if it is a validation error or not
    if(Object.keys(err).includes('errors') && Object.keys(err.errors).includes('firstName') && err.name === 'ValidationError')
        message = 'First name can only letters, commas, periods, spaces and apostrophes'
    else if(Object.keys(err).includes('errors') && Object.keys(err).includes('errors') && Object.keys(err.errors).includes('lastName') && err.name === 'ValidationError')
        message = 'Last name can only letters, commas, periods, spaces and apostrophes'
    else if(Object.keys(err).includes('errors') && Object.keys(err.errors).includes('username') && err.name === 'ValidationError')
        message = 'Username must at least be 5 characters and can contain letters, numbers, underscores, hyphens and periods'
    else if(Object.keys(err).includes('errors') && Object.keys(err.errors).includes('password') && err.name === 'ValidationError')
        message = 'Password must at least be 8 characters and must contain at least 1 number'
    // Duplicate Error:
    // First check if keys 'name' & 'code' are in error then check if it suits the duplication error
    else if(Object.keys(err).includes('name') && Object.keys(err).includes('code') && err.name === 'MongoError' && err.code === 11000)
        message = 'Account already exists'
    // Default message error
    // If no previous if statement is true then print default error message
    else
        message = "An error occured"

    return message
}

module.exports = translateError