export default store => next => action => {
    // console.log(action)
    if(!action.generateId) next(action);
    next({
        ...action,
        randomId: (Date.now() + Math.random().toString())
    })
}