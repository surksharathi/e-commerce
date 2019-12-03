import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer= combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(rootPersistConfig,rootReducer)