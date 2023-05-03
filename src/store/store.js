import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

import { rootReducer } from './root-reducer';

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action)
//     }                                        This is a custom middleware which can be used but we are using inbuilt mddleware

//     console.log('type:  ', action.type);
//     console.log('payload: ', action.payload)
//     console.log('currentState: ', store.getState());

//     next(action);

//     console.log('next-state: ', store.getState())

// }

const persistConfig = {
  key: "root",
  storage,
  // blacklist:['user']              //reducer value which we don't want to be persist, because it is already done by auth
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger];
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; //inordere to make redux devtools extension working for this redux

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer,undefined,composedEnhancers);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
