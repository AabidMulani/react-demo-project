import React, {Component} from 'react'

class CountDown extends Component {

    constructor(props) {
        super(props);

        console.log(props.currentDate);
    }

    componentWillMount() {
        this.getAgeValue();
    }

    componentDidMount() {
        setInterval(() => this.getAgeValue(), 1000);
    }

    getAgeValue() {


        const timeSinceBirth = Date.parse(new Date()) - Date.parse(this.props.currentDate);

        let seconds = Math.floor(timeSinceBirth / 1000 % 60);
        let minutes = Math.floor(timeSinceBirth / (1000 * 60) % 60);
        let hours = Math.floor(timeSinceBirth / (1000 * 60 * 60) % 24);
        let now = new Date();
        let dob = new Date(Date.parse(this.props.currentDate));
        let yearNow = now.getYear();
        let monthNow = now.getMonth();
        let dateNow = now.getDate();
        let yearDob = dob.getYear();
        let monthDob = dob.getMonth();
        let dateDob = dob.getDate();
        let month;
        let days;
        let year = yearNow - yearDob;

        if (monthNow >= monthDob)
            month = monthNow - monthDob;
        else {
            year--;
            month = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob)
            days = dateNow - dateDob;
        else {
            month--;
            days = 31 + dateNow - dateDob;

            if (month < 0) {
                month = 11;
                year--;
            }
        }

        this.setState({
            year, month, days, hours, minutes, seconds
        });

    }

    render() {

        return (
            <nav className="level">
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.year}</p>
                    <p className="heading">years</p>
                </div>
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.month}</p>
                    <p className="heading">month</p>
                </div>
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.days}</p>
                    <p className="heading">days</p>
                </div>
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.hours}</p>
                    <p className="heading">hours</p>
                </div>
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.minutes}</p>
                    <p className="heading">minutes</p>
                </div>
                <div className="level-item has-text-centered">
                    <p className="title">{this.state.seconds}</p>
                    <p className="heading">seconds</p>
                </div>
            </nav>

        );
    }

}

export default CountDown;