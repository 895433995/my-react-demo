import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends Component{
    //数据
    constructor(props){
        super(props);

        //react定义数据
        this.state={
            msg:'我是FetchJsonp',
            list:[],
            list2:[]
        }
    }

    getData=()=>{
        //通过axios获取服务器数据
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
            .then((response)=> {
                return response.json()
            }).then((json)=> {
                console.log('parsed json', json);
                this.setState({
                    list2:json.result
                });
            }).catch((ex)=> {
                console.log('parsing failed', ex);
            })
    }

    //render 模板
    render(){
        return (
            <div>
                <h2>fetchJsonp获取服务器数据</h2>

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
                <br/>
                <ul>
                    {
                        this.state.list2.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FetchJsonp;