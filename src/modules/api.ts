async function getUserRepos() {
    try {
        const url = `https://api.github.com/users/sasjakoning/repos`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getRepoCommits(repo) {
    try {
        const url = `https://api.github.com/repos/sasjakoning/${repo}/commits`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default {
    getUserRepos,
    getRepoCommits
}