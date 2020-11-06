import React, { Component } from 'react';
import PropTypes from 'prop-types'

class FullstackItem extends Component {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    // /**
    //  * 组件第一次存在与dom中，函数不会被执行
    //  * 如果已经存在于dom中，函数才会被执行
    //  */
    // componentWillReceiveProps(){
    //     console.log('child-componentWillReceiveProps')
    // }

    // componentWillUnmount(){
    //     console.log('child-componentWillUnmount')
    // }

    /**
     * 组件优化
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() { 
        console.log('child-render')
        return (
            <li onClick={this.handleClick}>
                {this.props.pgname}负责-{this.props.content}
            </li>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

FullstackItem.propTypes={
    pgname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

FullstackItem.defaultProps={
    pgname:'linus'
}

export default FullstackItem