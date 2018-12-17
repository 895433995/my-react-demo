import React, { Component } from 'react';

import './assets/css/index.css';
// import './assets/css/App.css';

//引入组件
// import List from './components/List';
// import Todolist from './components/Todolist';
// import ReactForm from './components/ReactForm';
// import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

  //render 模板
  render() {
    return (
      <div className="App">

        <Home></Home>

      </div>
    );
  }
}

export default App;
