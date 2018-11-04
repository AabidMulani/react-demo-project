import React from 'react'

class RepoList extends React.Component {

    constructor(props) {
        super(props);
    }


    getPrivateTagView(repoData) {
        if (repoData.private) {
            return (<div className="tag is-info">Private</div>)
        } else {
            return "";
        }
    }

    getForkedTagView(repoData) {
        if (repoData.fork) {
            return (<div className="tag is-success">Forked</div>)
        } else {
            return "";
        }

    }

    render() {
        const repoList = this.props.repoList;

        return (
            <div>
                {repoList.map((repo, k) => {
                    return (
                        <div className="box" key={k}>
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={repo.owner.avatar_url} alt="profile avatar"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p><strong> {repo.name} </strong>
                                            <small> @{repo.owner.login}</small>
                                            <br/> {repo.description}
                                        </p>
                                    </div>
                                    <div className="tags">
                                        {this.getPrivateTagView(repo)}
                                        {this.getForkedTagView(repo)}
                                    </div>
                                </div>
                            </article>
                        </div>);
                })
                }
            </div>
        );
    };

}

export default RepoList;