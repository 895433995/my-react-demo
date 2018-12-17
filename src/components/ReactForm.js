import React from 'react';

class ReactForm extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            msg:'react表单',
            name:'',
            sex:'1',
            city:'北京',
            citys:[
                '北京','上海','杭州'
            ],
            hobby:[
                {
                    'title':'睡觉',
                    'checked':true
                },{
                    'title':'吃饭',
                    'checked':false
                },{
                    'title':'敲代码',
                    'checked':true
                },
            ],
            info:'',

        })
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value,
        })
    }

    handleSubmit=(e)=>{
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);
    }

    handleSex=(e)=>{
        this.setState({
            sex:e.target.value,
        })
    }

    handleCity=(e)=>{
        this.setState({
            city:e.target.value,
        })
    }

    handleHobby=(key)=>{
        let hobby = this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby,
        })
    }

    handleInfo=(e)=>{
        this.setState({
            info:e.target.value,
        })
    }

    render(){
        return (
            <div className='ReactForm'>
                <h2>{this.state.msg}</h2>

                <form onSubmit={this.handleSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handleName}/><br/>
                    用户名：<input type="radio" value='1' checked={this.state.sex==1} onChange={this.handleSex}/>男
                            <input type="radio" value='2' checked={this.state.sex==2} onChange={this.handleSex}/>女<br/>

                    居住城市：
                        <select value={this.state.city} onChange={this.handleCity}>
                            {
                                this.state.citys.map(function (value,key) {
                                    return <option key={key}>{value}</option>
                                })
                            }

                        </select>
                    <br/>
                    爱好：
                    {
                        this.state.hobby.map((value, key)=>{
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>{value.title}
                                </span>
                            )
                        })
                    }
                    <br/><br/>

                    <textarea name="" id="" cols="30" rows="10" onChange={this.handleInfo}></textarea>
                    <input type="submit" defaultValue='提交'/>
                </form>
            </div>
        )
    }
}

export default ReactForm;