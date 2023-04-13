import { legacy_createStore as createStore,combineReducers } from "redux";
import UserReducer from "../reducers/userReducer";
import AuthReducer from "../reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage}

let reducers = combineReducers({
    UsersReducer:UserReducer,
    AuthReducer:AuthReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);
export const Store = createStore(persistedReducer);
export let persistor = persistStore(Store);


// export default Store;