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

	handleChangeTerm: function(event){
		var newSearch = {};
		newSearch[event.target.id] = event.target.value;
		this.setState(newSearch);
	},

	handleChangeStartDate: function(event){
		var newSearch = {};
		newSearch[event.target.id] = event.target.value;
		this.setState(newSearch);
	},

	handleChangeEndDate: function(event){
		var newSearch = {};
		newSearch[event.target.id] = event.target.value;
		this.setState(newSearch);
	},

	handleClick: function(){
		console.log(this.state.topic, this.state.startDate, this.state.endDate);
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
											<input type="text" className="form-control " id="topic" onChange={this.handleChangeTerm} required/>

											<h4 className=""><strong>Start Date (YYYYMMDD)</strong></h4>
											<input type="text" className="form-control " id="startDate" onChange={this.handleChangeStartDate} required/>

											<h4 className=""><strong>End Date (YYYYMMDD)</strong></h4>
											<input type="text" className="form-control " id="endDate" onChange={this.handleChangeEndDate} required/>

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