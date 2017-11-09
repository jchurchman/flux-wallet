import Dispatcher from '../dispatcher';
import { ADD_NEW_ITEM } from '../constants';

class WalletActions {
    
    addNewItem(item){
        Dispatcher.dispatch({
            actionType: ADD_NEW_ITEM,
            payload: item
        });
    }
}

export default new WalletActions();