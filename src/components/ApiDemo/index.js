import React from 'react'
import RepoList from '../RepoList'

class ApiDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newGitHubUserName: "",
            repoList: []
        }
    }


    onUserNameSubmit() {

        const GITHUB_URL = `https://api.github.com/users/${this.state.newGitHubUserName}/repos`;

        fetch(GITHUB_URL, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then(jsonData => {
                console.log(jsonData);
                if (!jsonData.message) {
                    this.setState({repoList: jsonData});
                } else {
                    this.setState({repoList: []});
                }
            }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className="columns is-centered has-text-centered is-centered">
                <div className="column is-6 " style={{margin: '40px'}}>
                    <div className="column field is-grouped">
                        <p className="control is-expanded">
                            <input placeholder="Enter Github UserName" className="input" type="text"
                                   onChange={(event) => this.setState({newGitHubUserName: event.target.value})}/>
                        </p>
                        <p className="control">
                            <a className="button is-info" onClick={() => this.onUserNameSubmit()}>
                                Search
                            </a>
                        </p>
                    </div>
                    <div>
                        <RepoList repoList={this.state.repoList}/>
                    </div>
                </div>
            </div>
        );
    };

}

export default ApiDemo;