import React from "react";
import { Provider } from "react-redux";
import sagas from '../Sagas/index'
import ConfigureStore from "./ConfigureStore";
import Header from '../Container/layout/Header'
import Sidebar from '../Container/layout/Sidebar'

const store = ConfigureStore();
store.runSaga(sagas);


export default class home extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
      <Header/>
      <div>
        <Sidebar/>
        </div>
      </div>
            </Provider>
      )
    }
}