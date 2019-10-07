import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content, Badge, Icon, Textfield} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.css';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  name: "",
		  email: "",
		  password: "",
		  password2: ""
		};
	  }
	  onUserLogin() {
		if (this.state.email !== "" && this.state.password !== "") {
		  this.props.loginUser(this.state, this.props.history);
		}
	  }
	  handleChange = event => {
		this.setState({
		  [event.target.id]: event.target.value
		});
	  }

	render(){
		return(
			<Layout>
			<Content>
					<div className='body-contents'><h6>Please register to start. If you are a partner of a design company, please contact us.</h6>

					<div class="row mt-5">
						<div class="col-md-6 m-auto">
							<div class="card card-body">
							<h1 class="text-center mb-3">
								<i class="fas fa-user-plus"></i> Register
							</h1>
							{/* <% include ./partials/messages %>  */}
							<form action="/register" method="POST">
								<div class="form-group">
								<label for="name">Name</label>

								<input
									type="name"
									id="name"
									name="name"
									class="form-control"
									placeholder="Enter Name"
									value={this.state.name}
              						onChange={this.handleChange}
								/>
								</div>
								<div class="form-group">
								<label for="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									class="form-control"
									placeholder="Enter Email"
									value={this.state.email}
              						onChange={this.handleChange}
								/>
								</div>
								<div class="form-group">
								<label for="password">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									class="form-control"
									placeholder="Create Password"
									value={this.state.password}
              						onChange={this.handleChange}
								/>
								</div>
								<div class="form-group">
								<label for="password2">Confirm Password</label>
								<input
									type="password"
									id="password2"
									name="password2"
									class="form-control"
									placeholder="Confirm Password"
									value={this.state.password2}
              						onChange={this.handleChange}
								/>
								</div>
								<button type="submit" class="btn btn-primary btn-block">
								Register
								</button>
							</form>
							<p class="lead mt-4">Have An Account? <a href="/login">Login</a></p>
							</div>
						</div>
					</div>
				</div>
			</Content>
			</Layout>
		)
	}
}

export default Register;