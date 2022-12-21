import React from "react"
import reactDom from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import reducers from "./Reducer"
import "./index.css"

const user = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null;

const initialState = {
    AuthReducer: {authData: user}
}


const store = createStore(reducers,initialState, compose(applyMiddleware(thunk)))

reactDom.render(
<Provider store={store} >
<App/>
</Provider>
,document.getElementById('root'))