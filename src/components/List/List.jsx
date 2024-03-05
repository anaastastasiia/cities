import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);

        setTimeout(() => {
            this.setState({
                list: !this.state.list.includes('Kyiv') ? this.state.list.push(`Kyiv`) : this.state.list,
                backgroundColor: `lightpink`
            })
        }, 1000)
    }

    state = {...this.props};

    render() {
        const {list=[], backgroundColor} = this.state;

        return list.length ? <ul style={{backgroundColor}}>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul> : null;
    }
}