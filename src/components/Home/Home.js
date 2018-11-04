import React, {Component} from 'react'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        console.log("-- constructor --");
    }

    componentWillMount() {
        console.log("-- componentWillMount --");
    }

    componentDidMount() {
        console.log("-- componentDidMount --");
    }

    shouldComponentUpdate() {
        console.log("-- shouldComponentUpdate --");
        return true;
    }

    componentWillUpdate() {
        console.log("-- componentWillUpdate --");
    }

    componentDidUpdate() {
        console.log("-- componentDidUpdate --");
    }

    componentWillUnmount() {
        console.log("-- componentWillUnmount --");
    }


    render() {
        console.log("-- render --");
        return (
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Home Section
                    </h1>
                    <h2 className="subtitle">
                        Welcome to the world of <strong>REACT JS</strong>
                    </h2>
                </div>
            </div>
        );
    }

}

export default Home;