import { legacy_createStore as createStore,combineReducers } from "redux";
import UserReducer from "../reducers/userReducer";
import AuthReducer from "../reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FilterReducer from "../reducers/filterReducer";

const persistConfig = {
    key: 'root',
    storage}

let reducers = combineReducers({
    UsersReducer:UserReducer,
    AuthReducer:AuthReducer,
    FilterReducer: FilterReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);
export const Store = createStore(persistedReducer);
export let persistor = persistStore(Store);


// export default Store;