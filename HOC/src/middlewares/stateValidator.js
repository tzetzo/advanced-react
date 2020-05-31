// custom Redux State validation middleware
import tv4 from 'tv4'
import stateSchema from './stateSchema'

export default ({dispatch, getState}) => next => action => {
  next(action); //immediately pass the action to the other middleware
  if(!tv4.validate(getState(), stateSchema)) { //validation logic is executed after all state is updated
    console.warn('Invalid state schema detected')
  }
}
