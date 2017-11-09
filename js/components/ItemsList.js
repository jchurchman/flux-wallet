import React, { Component } from 'react';
import WalletStore from '../stores/walletStore';

export default class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: WalletStore.getAllItems()
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({ items: WalletStore.getAllItems() });
    }

    componentWillMount() {
        WalletStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        WalletStore.removeChangeListener(this._onChange);
    }

    render() {
        let noItemsMessage;
        const { items } = this.state;

        if(!this.state.items.length) {
            noItemsMessage = (<li className="no-items">Your wallet is new!</li>);
        }

        return (
            <ul className="items-list">
                {noItemsMessage}
                {items.map( ({amount, id, description }) => {
                    let amountType = parseFloat(amount) > 0 ? 'positive' : 'negative';
                    return (<li key={id}>{description} <span className={amountType}>{amount}</span></li>);
                })}
            </ul>
        );
    }
}