import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class News extends Component{
    constructor(props){
        super(props);

        this.state={
            username:'1',
            msg:'新闻',
            list:[
                '111111',
                '222222',
                '333333',
            ],
            list2:[
                <h2 key='1'>我是一个h2</h2>,
                <h3 key='2'>我是一个h3</h3>,
                <h4 key='3'>我是一个h4</h4>
            ],
            list3:[
                {title:"新闻111"},
                {title:"新闻222"},
                {title:"新闻333"},
                {title:"新闻444"}
            ]
        }
    }

    run=(event)=>{
        // alert(this.state.msg);
        // console.log(event);

        // alert(event.target);

        event.target.style.backgroundColor='red';

        alert(event.target.getAttribute('aid'));
    };

    inputChange=(e)=>{
    //    获取表单的值
    //     console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    };

    getInput=()=>{
        alert(this.state.username);
    };

    render(){
        let listResult=this.state.list.map(function (value,key) {
            return <li key={key}>{value}</li>;
        });
        return(
            <div className="news">
                {this.state.msg}

                <img src={logo} alt="svg"/>

                <img src={require('../assets/images/logo.svg')} alt=""/>

                {this.state.list2}
                <hr/>
                <ul>
                    {listResult}
                </ul>
                <hr/>
                <ul>
                    {
                        this.state.list3.map(function (value, key) {
                            return (<li key={key}>{value.title}</li>);
                        })
                    }
                </ul>

                <br/>

                <button aid="123" onClick={this.run}>事件对象</button>

                <br/>

                <h2>获取表单的值</h2>
                <input type="text" onChange={this.inputChange}/>

                <button onClick={this.getInput}>获取input的值</button>
            </div>
        )
    }
}

export default News;