import React, { Component } from 'react';

import Header from './Header';
import Axios from './Axios';
import FetchJsonp from './FetchJsonp';



class Home extends Component{
    //数据
    constructor(props){
        super(props);

        //react定义数据
        this.state={
            msg:'我是一个home组件',
            title:'首页',
            color:'red',
            style:{
                color:'blue',
                fontSize:'14px'
            },
            inputValue:''
        }
    }

    run=()=>{
        alert("我是父组件的run方法");
        console.log(this.refs.header)
    }

    getData=()=>{
        alert(this.state.title);
    };

    getResult=(result)=>{
        alert(result);
        this.setState({
            msg:result,
        })
    };
    inputChange=()=>{
        this.setState({
            inputValue:this.refs.name.value
        })
    };

    //render 模板
    render(){
        return (
            <div>
                <Header ref='header' num={123} run={this.run} home={this}></Header>
                <h2>{this.state.msg}</h2>

                <button onClick={this.run}>获取子组件</button>

                <div title={this.state.title}>我是一个title</div>

                <div className={this.state.color}>{this.state.inputValue}</div>

                <label htmlFor="name" style={this.state.style}>姓名</label>

                <input type="text" ref="name" id="name" placeholder="小明" value={this.state.inputValue} onChange={this.inputChange}/>

                <br/>

                <h2>这是Axios组件</h2>
                <Axios></Axios>
                <hr/>
                <h2>这是FetchJsonp组件</h2>
                <FetchJsonp></FetchJsonp>
            </div>
        )
    }
}

export default Home;