// Include React 
var React = require('react');

var helpers = require('./utils/helpers.js');

var Search = React.createClass({

	getInitialState: function(){
		return {
			topic: "",
			startDate: "",
			endDate: ""
		}
	},

	handleChange: function(){
		var newSearch = {};
		newSearch[event.target.id] = event.target.value;
		this.setState(newSearch);
	},

	handleClick: function(){
		helpers.runQuery(this.state.topic, this.state.startDate, this.state.endDate).then(function(data){
			console.log(data);
		});
	},

	// Here we render the component
	render: function(){

		return(

			

				<div className="row">

					<div className="col-md-12">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Form</h3>
							</div>
							<div className="panel-body text-center">

									<form>
										<div className="form-group">
											<h4 className=""><strong>Topic</strong></h4>
											<input type="text" className="form-control " id="num1" onChange={this.handleChange} required/>

											<h4 className=""><strong>Start Date</strong></h4>
											<input type="text" className="form-control " id="num2" onChange={this.handleChange} required/>

											<h4 className=""><strong>End Date</strong></h4>
											<input type="text" className="form-control " id="text" onChange={this.handleChange} required/>

										</div>

									</form>
									{/*<a href="#/saved"><button>Saved</button></a>*/}
									<a href="#/results"><button onClick={this.handleClick}>Search</button></a>
							</div>
						</div>

					</div>
				</div>
				
		)
	}
});

// Export the component back for use in other files
module.exports = Search;