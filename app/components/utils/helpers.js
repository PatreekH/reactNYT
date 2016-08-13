// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Geocoder API
var authKey = "ed9bcf16982649ceb528f12ccf34d69c";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(searchTerm, startDate, endDate){

		console.log(searchTerm, startDate, endDate);

		var authKey = "ed9bcf16982649ceb528f12ccf34d69c";
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + authKey;

		return new Promise(function(resolve, reject) {
			axios.get(queryURL).then(function(response){
				console.log(response);
			})
		});

	}

/*	// This function hits our own server to retrieve the record of query results
	getHistory: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postHistory: function(location){

		return axios.post('/api', {location: location})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}*/

}


// We export the helpers function 
module.exports = helpers;