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

		return axios.get(queryURL)
			.then(function(response){
			
				console.log(response);
				return response.data.response.docs[0].lead_paragraph;
		})

	},

	getArticle: function(response){

		return axios.get('/api')
			.then(function(results){
				console.log(results);
				console.log("grabbed article from database");
				return results;
			});
	},

		// This function posts new searches to our database.
	postArticle: function(response){

		return axios.post('/api', {article: response})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	},

}


// We export the helpers function 
module.exports = helpers;