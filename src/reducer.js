module.exports.handleActions = function(handlers, defaultState) {
    return (state = defaultState, action) => typeof handlers[action.type] === 'function' ? handlers[action.type](state, action) : state
}
