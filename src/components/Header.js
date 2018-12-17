import React from 'react';

import PropTypes from 'prop-types';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state=({
            msg:'这是一个头部组件'
        })
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>

                <button onClick={this.props.run}>调用父组件run方法</button>

                <button onClick={this.props.home.getData}>获取home组件getDate方法</button>

                <button onClick={this.props.home.getResult.bind(this,"我是title")}>修改父组件</button>
            </div>
        )
    }
}

Header.defaultProps={
    title:'标题'
}

Header.propTypes={
    num:PropTypes.number
}

export default Header;