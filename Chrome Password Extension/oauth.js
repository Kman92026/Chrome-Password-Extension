window.onload = function () {
    document.querySelector('button').addEventListener('click', function () {
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                'contentType': 'json'
            };
            fetch(
                let photoDiv = document.querySelector('#friendDiv');
            let returnedContacts = data.memberResourceNames;
            for (let i = 0; i < returnedContacts.length; i++) {
                fetch(
                    'https://people.googleapis.com/v1/' + returnedContacts[i] +
                    '?personFields=photos&key=AIzaSyD0QhNNmmzUUQDvLWuD4uiEJGY427lO7hI',
                    init)
                    .then((response) => response.json())
                    .then(function (data) {
                        let profileImg = document.createElement('img');
                        profileImg.src = data.photos[0].url;
                        photoDiv.appendChild(profileImg);
                });
        });
    });
};