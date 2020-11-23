const {getExecutioncontext} = require('./persistentContext');

function Logger(event, data) {
    const context = getExecutioncontext();
    console.log(context, event, data);
}

module.exports = Logger;