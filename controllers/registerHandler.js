const Logger = require('../utilites/Logger');

module.exports = async (req, res, next) => {
    
    try {
        Logger('new_user_request', {name:req.body.name});
        await doSomething();
        res.send({success: true});
    } catch (err) {
        console.log(err);
        res.send({success:false});
    }
    
}


function doSomething() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            Logger('user_created_successfully', {});
            return res({});
        }, 6000);   
    });
    
}