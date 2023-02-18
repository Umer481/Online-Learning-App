import { createStore, applyMiddleware ,compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers/index.js'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

export {
    store,
    persistor
}

