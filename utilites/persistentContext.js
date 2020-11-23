const asyncHooks = require('async_hooks');

const contextMap = new Map();

const hook = asyncHooks.createHook({init, destroy});
hook.enable();

function init (asyncId, type, triggerAsyncId) {
    const parentContext = contextMap.get(triggerAsyncId);
    if(!parentContext) return;
    contextMap.set(asyncId, parentContext);
}

function destroy (asyncId) {
    contextMap.delete(asyncId);
}

function setExecutionContext(context) {
    contextMap.set(asyncHooks.executionAsyncId(), context);
}

function getExecutioncontext() {
    const context = contextMap.get(asyncHooks.executionAsyncId());
    return context;
}

module.exports = {
    setExecutionContext,
    getExecutioncontext,
};