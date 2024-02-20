// Get a reference to the database service
var database = firebase.database();

// Create a reference to the root of your database
var rootRef = database.ref();

// Get a reference to the 'data' div
var dataDiv = document.getElementById('db-root');

// Listen for data
rootRef.once('value', function(snapshot) {
    // The snapshot argument contains the data
    var data = snapshot.val();

    // Iterate over each user
    for (var userId in data) {
        // Create a card for the user
        var card = document.createElement('div');
        card.className = 'card';

        // Create an image for the card if it's set
        if (data[userId].image) {
            var image = document.createElement('img');
            image.src = data[userId].image;
            image.alt = 'Person';
            image.className = 'card__image';
            card.appendChild(image);
        }

        // Create a title for the card
        var title = document.createElement('p');
        title.className = 'card__name';
        title.textContent = data[userId]['name'];
        card.appendChild(title);

        // Create a grid container for the card
        var grid = document.createElement('div');

        // Create a paragraph for the user's age if it's set
        if (data[userId].age) {
            var age = document.createElement('h3');
            age.className = 'card__sub-heading';
            age.textContent = 'Age: ' + data[userId]['age'];
            grid.appendChild(age);
        }

        // Create a paragraph for the user's interests if it's set
        if (data[userId].interests) {
            var interests = document.createElement('h4');
            interests.className = 'card__sub-heading-item';
            interests.textContent = 'Interests: ' + data[userId]['interests'];
            grid.appendChild(interests);
        }

        card.appendChild(grid);

        // Create a button to follow the user
        var followButton = document.createElement('button');
        followButton.className = 'btn draw-border';
        followButton.textContent = 'Follow';
        card.appendChild(followButton);

        // Create a button to message the user
        var messageButton = document.createElement('button');
        messageButton.className = 'btn draw-border';
        messageButton.textContent = 'Message';
        card.appendChild(messageButton);

        // Add the card to the 'data' div
        dataDiv.appendChild(card);
    }
});