import React from 'react'

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount () {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.intervalID)
    }

    async tick () {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render () {
        return (
            <p className="code">
                { this.state.time }
            </p>
        )
    }
}

export default Clock;