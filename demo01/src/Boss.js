import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
         this.toToggle=this.toToggle.bind(this)
    }
    render() { 
        return ( 
            <div>
                {/* 方法一
                <div className={this.state.isShow?'show':'hide'}>Boss级人物-马斯克</div>
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
                方法二 - tansition-group
                */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit // 退场后删除元素
                >
                    <div>Boss级人物-马斯克</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
            </div>
        )
    }

    toToggle() {
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}

export default Boss
