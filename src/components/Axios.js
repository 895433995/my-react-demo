import React, { Component } from 'react';
import axios from 'axios';

class Axios extends Component{
    //数据
    constructor(props){
        super(props);

        //react定义数据
        this.state={
            msg:'我是Axios',
            list:[]
        }
    }

    getData=()=>{
        //通过axios获取服务器数据
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
            .then((response)=> {
                console.log(response.data.result);

                this.setState({
                    list:response.data.result
                })
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    //render 模板
    render(){
        return (
            <div>
                <h2>axios获取服务器数据</h2>

                <button onClick={this.getData}>获取服务器api接口</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Axios;