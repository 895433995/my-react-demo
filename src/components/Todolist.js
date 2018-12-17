import React from 'react';
import storage from '../model/storage';

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            list:[
                {
                    title:'录制ionic',
                    checked:true,
                },
                {
                    title:'录制nodejs',
                    checked:false,
                },
                {
                    title:'录制egg.js',
                    checked:true,
                },
                {
                    title:'录制vue',
                    checked:false,
                },
            ],
        })
    }

    addData=(e)=>{
        if (e.keyCode===13){
            let title = this.refs.title.value;
            let tempList = this.state.list;
            tempList.push({
                title:title,
                checked:false
            });
            this.setState({
                list:tempList
            })

            this.refs.title.value='';

            //设置缓存数据
            storage.set('todolist',tempList);
        }
    }

    removeData=(key)=>{
        let tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        //设置缓存数据
        storage.set('todolist',tempList);
    }

    checkboxChange=(key)=>{
        let tempList = this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList
        })
        //设置缓存数据
        storage.set('todolist',tempList);
    }

    componentDidMount(){
        //获取缓存数据
        let todolist = storage.get('todolist');
        if (todolist){
            this.setState({
                list:todolist,
            })
        }
    }

    render(){
        return (
            <div className='todolist'>
                <header className='title'>
                    TodoList:&nbsp;&nbsp;&nbsp;
                    <input ref='title' onKeyUp={this.addData}/>
                </header>

                <h2>待办事项</h2>

                <hr/>

                <ul>
                    {
                        this.state.list.map((value, key)=> {
                            if (!value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>

                                        {value.title}

                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                            return true;
                        })
                    }
                </ul>

                <h2>已完成事项</h2>

                <hr/>

                <ul className='checked'>
                    {
                        this.state.list.map((value, key)=> {
                            if (value.checked){
                                return(
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>

                                        {value.title}

                                        -- <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                            return true;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todolist;