// Get a reference to the database service
var database = firebase.database();

// Create a reference to the root of your database
var rootRef = database.ref();

// Listen for data
rootRef.once('value', function(snapshot) {
    // The snapshot argument contains the data
    console.log(snapshot.val());
});