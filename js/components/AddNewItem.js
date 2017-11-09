import React, { Component } from 'react';
import WalletActions from '../actions/walletActions';

export default class AddNewItem extends Component {

    constructor(props) {
        super(props);

        this._getFreshItem = this._getFreshItem.bind(this);

        this.state = {
            item: this._getFreshItem()
        };
    }

    _getFreshItem() {
        return {
            description: '',
            amount: ''
        };
    }

    _updateState({ target }) {
        const { name: field, value } = target;

        if( value && field === 'amount' && !value.match(/^[a-z0-9.\+\-]+$/g)) {
            return;
        }

        this.state.item[field] = value;
        this.setState({ item: this.state.item });
    }

    _addNewItem(event) {
        event.preventDefault();
        const { item } = this.state;
        let { description, amount } = item;  // not sure this destructuring will work in the rest of the method

        description = description || '-';
        amount = amount || '0';

        WalletActions.addNewItem(item);
        this.setState({ item: this._getFreshItem() });
    }

    render() {
        return (
            <div>
                <h3 className="total-budget">$0</h3>
                <form className="form-inline add-item" onSubmit={this._addNewItem.bind(this)}>
                    <input 
                        type="text" 
                        className="form-control description" 
                        name="description" 
                        value={this.state.item.description} 
                        placeholder="Description" 
                        onChange={this._updateState.bind(this)} 
                    />
                    <div className="input-group-amount">
                        <div className="input-group-addon">$</div>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="amount" 
                            value={this.state.item.amount} 
                            placeholder="Amount" 
                            onChange={this._updateState.bind(this)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary add">Add</button>
                </form>
            </div>
        )
    }
}