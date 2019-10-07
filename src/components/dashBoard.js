import React, { Component } from 'react';
import Images from './Images';

class Dashboard extends Component{
	
	render(){
		return(
            <div>
            <h1 class="mt-4">Dashboard</h1>
            <p class="lead mb-3">Welcome </p>
            {/* <%= user.name %> */}
            <a href="/users/logout" class="btn btn-secondary">Logout</a>
            </div>
        )
    }
}

export default Dashboard;