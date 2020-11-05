import React,{Component, Fragment} from 'react'
import './style.css'

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
                    <label htmlFor='js'>需求：</label>
                    {/* bind()是es6中的语法,用来绑定this */}
                    <input id='js' className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
                    <button onClick={this.addList.bind(this)}>添加需求</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                            <li 
                                key={index+item}
                                onClick={this.deleteItem.bind(this,index)}
                                // html解析
                                dangerouslySetInnerHTML={{__html:item}}
                            >
                            </li>
                        )
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

    // 增加列表项
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    // 删除列表项
    deleteItem(index){
        /**
         * 错误写法：this.state.list.splice(index,1)
         * 原因：会有性能损耗
         */
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Fullstack