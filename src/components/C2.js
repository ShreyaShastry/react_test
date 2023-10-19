import {Component} from 'react';

class C2 extends Component{
    constructor(){
        super();
        console.log("I am constructor mehtod");
        this.state={brand:"nike"}
    }
    setState = ()=>{this.setState({brand:'addidas'})}
    static getDerivedStateFromProps(){
        console.log('I am getDerivedStateFromProps method');
        return null;
    }
    componentDidMount(){console.log('I am componentDidMount method');}
    render(){
        console.log('I am render method');
        return(
            <>
                <h1>Lifecycle Methods</h1>
                <p>{this.state.brand}</p>
                <button onClick={this.setState}>Click me</button>
            </>
        )
    }
}
export default C2;