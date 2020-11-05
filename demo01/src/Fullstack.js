import React,{Component, Fragment} from 'react'
import './style.css'
import FullstackItem from './FullstackItem'

class Fullstack extends Component{

    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['UI设计','前端设计']
        }
    }

    /**
     * 生命周期函数，对代码主体没有影响
     */
    componentWillMount(){
        console.log('componentWillMount---组件将要挂载到页面的时刻')
    }

    /**
     * 生命周期函数
     */
    componentDidMount(){
        console.log('componentDidMount---组件挂载完成时刻')
    }

    /**
     * 生命周期函数
     * 在render之前执行，必须返回布尔值，true执行render，false不执行
     * 作用：优化组件性能
     */
    
    shouldComponentUpdate(){
        console.log('1-shouldComponentUpdate')
        return true
    }

    /**
     * 生命周期函数
     */
    componentWillUpdate(){
        console.log('2-componentWillUpdate')
    }

    /**
     * 生命周期函数
     */
    componentDidUpdate(){
        console.log('4-componentDidUpdate')
    }

    /**
     * render - 渲染
     */
    render(){
        // 生命周期函数
        console.log('3-render---组件挂载中')
        return (
            /**
             * 1. 第一种写法
            <div>
                <div><input /><button>增加需求</button></div>
                <ul>
                    <li>UI设计</li>
                    <li>前端设计</li>
                </ul>
            </div>
            2. 第二种写法，少一层div包裹，可以省略一些css
             */
            
            <Fragment>
                <div>
                    <label htmlFor='js'>需求：</label>
                    {/* bind()是es6中的语法,用来绑定this */}
                    <input 
                        id='js' 
                        className='input' 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        // 通过ref属性进行绑定
                        ref = {(input)=>{this.input=input}}
                    /> 
                    <button onClick={this.addList.bind(this)}>添加需求</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                                // 父组件向子组件按属性传值
                                <FullstackItem
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                 />
                        )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(){
        this.setState({
            // this.state.input.value = e.target.value
            // 下面的写法语义更强
            inputValue: this.input.value
        })
    }

    // 增加列表项
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
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