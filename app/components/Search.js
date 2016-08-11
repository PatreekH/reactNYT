// Include React 
var React = require('react');

var Search = React.createClass({

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

											{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
												Also note how each has an onChange event associated with our handleChange event. 
											*/}
											<input type="text" className="form-control " id="num1" required/>

											<h4 className=""><strong>Start Date</strong></h4>
											<input type="text" className="form-control " id="num2" required/>

											<h4 className=""><strong>End Date</strong></h4>
											<input type="text" className="form-control " id="text" required/>

										</div>

									</form>
									{/*<a href="#/saved"><button>Saved</button></a>*/}
									<a href="#/results"><button>Search</button></a>
							</div>
						</div>

					</div>
				</div>
				
		)
	}
});

// Export the component back for use in other files
module.exports = Search;