import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import { ADD_NEW_ITEM } from '../constants';

const CHANGE = 'CHANGE';
let _walletState = [];

class WalletStore extends EventEmitter {
    constructor() {
        super();

        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions({ actionType, payload }) {
        switch(actionType) {
            case ADD_NEW_ITEM:
                this._addNewItem(payload);
            break;
        }
    }

    _addNewItem(item) {
        item.id = _walletState.length;
        _walletState.push(item);
        this.emit(CHANGE);
    }

    getAllItems() {
        return _walletState;
    }

    getTotalBudget() {
        let totalBudget = 0;

        _walletState.forEach( ({ amount }) => {
            totalBudget += parseFloat(amount);
        });

        return totalBudget;
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}

export default new WalletStore();