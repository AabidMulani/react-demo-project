import React, {Component} from 'react'
import CountDown from "../CountDown";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: "25 October 1991",
            newEnteredDate: ""
        };
    }

    updateDateValue() {
        this.setState({currentDate: this.state.newEnteredDate})
    }


    render() {

        return (
            <div className="columns is-centered has-text-centered">
                <div className="column is-6 is-centered" style={{margin: '40px'}}>
                    <h2 className="subtitle is-1 is-centered">{this.state.currentDate}</h2>

                    <div className="columns field has-addons" style={{margin: '40px'}}>
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Enter your birth date"
                                   onChange={(event) => {
                                       this.setState({newEnteredDate: event.target.value});
                                   }}/>
                        </p>
                        <p className="control">
                            <div className="button is-info" onClick={() => this.updateDateValue()}>
                                Setup
                            </div>
                        </p>
                    </div>

                    <CountDown
                        currentDate={this.state.currentDate}/>
                </div>
            </div>
        );
    }

}

export default Index;