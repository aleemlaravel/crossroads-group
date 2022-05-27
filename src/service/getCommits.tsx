import { Octokit } from "octokit"
import { preProcessFile } from "typescript"
export const getCommits = async() => {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_ACCESS_TOKEN
    })

    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: process.env.REACT_APP_OWNER,
        repo: process.env.REACT_APP_REPO
    })

    const commitsData = response.data.map(commitData => ({
        'sha': commitData.sha,
        'authorName': commitData.commit.author ? commitData.commit.author.name : '',
        'message': commitData.commit.message,
        'date': new Date(commitData.commit.author.date).toLocaleString()
    }))
    
    return commitsData;
}