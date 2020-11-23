const {setExecutionContext}  = require('../utilites/persistentContext');

module.exports = (req, res, next) => {
    if(req.body && req.body.traceId) setExecutionContext({traceId: req.body.traceId});
    next();
};
