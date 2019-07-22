import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import albumReducer from './album_recucer';

const rootReducer = combineReducers({
  form: formReducer,
  album: albumReducer
});

export default rootReducer;
