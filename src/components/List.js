import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);

        this.state=({
            username:'',
        })

    }

    inputChange=()=>{
        let val = this.refs.username.value;

        this.setState({
            username:val,
        })
    }

    getInput=()=>{
        alert(this.state.username);
    }

    inputKeyUp=(e)=>{
        console.log(this.refs.username)
        if (e.keyCode===13) {
            console.log(e.target.value);

        }
    }

    render(){
        return (
            <div className='APP'>

                <input ref='username' type="text" onChange={this.inputChange}/>
                <button onClick={this.getInput}>获取input的值</button>

                <br/><br/>
                <hr/>

                <input type="text" onKeyUp={this.inputKeyUp}/>
            </div>
        )
    }
}

export default List;