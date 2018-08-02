import { combineReducers } from 'redux';

import textTransform from './textTransform'
import notifications from './notifications'

export default combineReducers({
    textTransform, notifications
})