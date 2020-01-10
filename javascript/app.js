//INSTANTIATE GITHUB CLASS
const gitHub = new GitHub();

//INSTANTIATE UI CLASS
const ui = new UI();
// UI VARS
const searchUser = document.querySelector('#searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', e => {
    // GET INPUT TEXT
    const usertext = e.target.value;

    if (usertext !== '') {
        // MAKE HTTP CALL
        gitHub.getUser(usertext).then(data => {
            if (data.profile.message === 'Not Found') {
                // SHOW ALERT
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // SHOW PROFILE
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // CLEAR PROFILE
        ui.clearProfile();
    }

    e.preventDefault();
});
