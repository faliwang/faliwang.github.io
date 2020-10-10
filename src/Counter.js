import React, { useState } from 'react';
import ButtonExampleGroup from './Button';
import './Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const minus = () => {
        if (count > 0){
            setCount(count - 1);
        }
    }

    const reset = () =>{
        setCount(0);
    }
    
    return(
        <div className="Counter">
            <p> I made a counter for fun. Please enjoy the cute button.</p>
            <h1>{count}</h1>
            <div class="ui buttons">
                <button class="ui button" onClick={add}>+</button>
                <button class="ui button" onClick={minus}>-</button>
                <button class="ui button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

/*
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { count: 0 };
    }

    add = () =>{
        this.setState((state) => ({count: state.count+1}));
    }

    minus = () =>{
        this.setState((state) => ({count: state.count-1}));
    }

    reset = () =>{
        this.setState({count: 0});
    }
    
    render(){
        return(
            <div className="Counter">
                <h1>{this.state.count} </h1>
                <Button text="+" onClick={this.add} />
                <Button text="-" onClick={this.minus} />
                <Button text="Reset" onClick={this.reset} />
            </div>
        );
    }
}
*/

export default Counter;
