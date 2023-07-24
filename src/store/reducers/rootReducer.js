// gom lại tất cả reducers thành root
import appReducer from "./appReducer";
import {combineReducers, applyMiddleware} from 'redux'

const rootReducer = combineReducers({
    app: appReducer,
})
export default rootReducer