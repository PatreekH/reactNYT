// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(searchTerm, startYear, endYear){

		console.log(searchTerm, startYear, endYear);

		//Figure out the geolocation
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				/*return response.data.results[0].formatted;*/
		})

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