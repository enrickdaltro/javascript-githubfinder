class GitHub {
    constructor() {
        this.clientId = '4accd953a638ad65123e';
        this.clientSecret = 'ab9d56febdd1bc952e641eea048ef11c1d59949e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.clientId}&client_secret=${this.clientSecret}`
        );
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}
