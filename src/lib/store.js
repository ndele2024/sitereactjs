import { configureStore } from '@reduxjs/toolkit';
import { shop, testReducer } from './reducer';

export default configureStore({
    reducer: {
        shoppingApp: shop,
        testApp: testReducer
    }
})