import React, { Component } from 'react';
import AddNewItem from './AddNewItem';
import ItemsList from './ItemsList';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="app-title">Flux Wallet</h1>
                <AddNewItem />
                <ItemsList />
            </div>
        );
    }

}
