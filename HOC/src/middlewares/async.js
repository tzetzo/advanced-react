export default ({dispatch}) => next => action => { //action is the action returned by the action creator
  // Check to see if the action has a promise on its 'payload' property
  // If it doesn't have promise, then send the action on to the next middleware
  if(!action.payload || !action.payload.then){
    return next(action)
  }

  // If the action has a promise, then wait for it to resolve; get its data!!!
  // and then create a new action with that data and dispatch it
  action.payload.then(function(response){
    const newAction = {...action, payload: response};
    dispatch(newAction);
  })
}
