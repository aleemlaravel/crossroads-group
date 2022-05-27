import React from "react";
import { getCommits } from '../../service/getCommits';
import 'bootstrap/dist/css/bootstrap.min.css';


class Commits extends React.Component <{}, {commits: any[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            commits: []
        }
        this.handleState = this.handleState.bind(this)
    }
    componentDidMount() {
        getCommits()
            .then((data) => this.handleState(data))
    }
    handleState(commits: any[]) {
        this.setState((state) => ({
            commits: commits
        }))
    }
    render() {
        return (
            <div className="container">
            <table  className="table table-striped responsive bordered ">
                <thead  className="thead-dark">
                    <tr>
                        <td>SHA</td>
                        <td>Name</td>
                        <td>Message</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.commits.map((commit,index) => <tr key = {index}><td>{commit.sha}</td><td>{commit.authorName}</td><td>{commit.message}</td><td>{commit.date!}</td></tr>)
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
export default Commits;