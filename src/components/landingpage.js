import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Images from './Images';



class LandingPage extends Component{
    

	render(){
		return(
            
            <div className="header content">

                <div>
                    <input type= "file" onChange={this.fileSelectedHandler}/>
                    <button onClick={this.fileUploadHandler}>Upload</button>
                </div>
            {/*             
            <h2 className="subtitle is-6">Code Challenge #16</h2>
            <h1 className="title is-1">
                Infinite Scroll Unsplash Code Challenge
            </h1> */}
            
            <Images />
            </div>

		)
	}
}

export default LandingPage;