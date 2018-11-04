import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "../../components/Home/Home";
import AgeTimer from "../../components/AgeTimer"
import AppBar from "../../components/AppBar";
import ApiDemo from "../../components/ApiDemo";

class App extends React.Component {

    render() {
        return (
            <div>
                <AppBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/ageTimer" exact component={AgeTimer}/>
                    <Route path="/apiDemo" exact component={ApiDemo}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        );
    };
}


export default App;