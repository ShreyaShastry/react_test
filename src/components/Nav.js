import {Component} from 'react';
class Nav extends Component{
    render(){
        return(
            <div>
                <h1>Nav {this.props.age}</h1>
            </div>
        )
    }
}
export default Nav;