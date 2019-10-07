import React, { Component } from 'react';
import { Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


class LogIn_Register extends Component{
	render(){
		return(
		<div className='body-contents'>
			<div class="row mt-6">
				 <div class="col-md-6 m-auto">
					<div class="card card-body text-center">
					<h1><i class="fab fa-node-js fa-3x"></i></h1>
					<p>Create an account or login</p>
						<Content>
							<Link style={{color: 'black'}} to="/register" class="btn btn-primary btn-block">Register</Link>
							<Link style={{color: 'black'}} to="/logIn" class="btn btn-secondary btn-block">Log in</Link>
						</Content>
						
					</div>
				</div> 
			</div>
		</div>
		)
	}
}

export default LogIn_Register;