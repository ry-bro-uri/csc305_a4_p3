// Get a reference to the database service
var database = firebase.database();

// Create a reference to the root of your database
var rootRef = database.ref();

// Get a reference to the 'data' div
var dataDiv = document.getElementById('data');

// Listen for data
rootRef.once('value', function(snapshot) {
    // The snapshot argument contains the data
    var data = snapshot.val();

    // Convert the data to a string
    var dataString = JSON.stringify(data, null, 2);

    // Update the 'data' div
    dataDiv.textContent = dataString;
});