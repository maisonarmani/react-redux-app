import React, {Component} from "react";
import {Provider} from "react-redux"

import List from "./containers/list";
import store from "./stores/store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <List />
                </div>
            </Provider>
        )
    }
}