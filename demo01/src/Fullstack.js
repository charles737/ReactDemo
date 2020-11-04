import React,{Component, Fragment} from 'react'

class Fullstack extends Component{

    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['UI设计','前端设计']
        }
    }

    render(){
        return (
            // 1. 第一种写法
            // <div>
            //     <div><input /><button>增加需求</button></div>
            //     <ul>
            //         <li>UI设计</li>
            //         <li>前端设计</li>
            //     </ul>
            // </div>
            // 2. 第二种写法，少一层div包裹，可以省略一些css
            <Fragment>
                <div>
                    {/* bind()是es6中的语法,用来绑定this */}
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
                    <button onClick={this.addList.bind(this)}>增加需求</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return <li key={index+item}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    // 增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}

export default Fullstack