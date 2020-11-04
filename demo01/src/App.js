import React,{Component} from 'react'

class App extends Component{
    render(){
        return (
            <ul className="list">
                <li>{false?'www.google.com':'谷歌'}</li>
                <li>React</li>
            </ul>
            /**
             * <ul className="list">
                <li>www.google.com</li>
                <li>React</li>
            </ul>
             * 这两种写法结果相同，但上面的更简洁
             * var child1 = React.createElement('li',null,'www.google.com')
            var child2 = React.createElement('li',null,'React')
            var root = React.createElement('ul',{className:'list'},child1,child2)
             */
        )
    }
}

export default App