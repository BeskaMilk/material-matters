import React, { Component } from 'react';
import Images from './Images';

class LogIn extends Component{
	
	render(){
		return(
			<div className='body-contents'><h6>Log in using Email or Facebook/LinkedIn link. If you have problems with logging in, please contact us.</h6>
			
				<div class="row mt-5">
					<div class="col-md-6 m-auto">
						<div class="card card-body">
							<h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
							{/* <% include ./partials/messages %> */}
								<form action="/login" method="POST">
									<div class="form-group">
									<label for="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										class="form-control"
										placeholder="Enter Email"
									/>
									</div>
									<div class="form-group">
									<label for="password">Password</label>
									<input
										type="password"
										id="password"
										name="password"
										class="form-control"
										placeholder="Enter Password"
									/>
								</div>
								<button type="submit" class="btn btn-primary btn-block">Login</button>
							</form>
							<p class="lead mt-4">
								No Account? <a href="/register">Register</a>
							</p>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default LogIn;