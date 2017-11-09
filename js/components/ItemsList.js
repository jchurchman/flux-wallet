import React, { Component } from 'react';

export default class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
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