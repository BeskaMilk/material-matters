import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Badge, Icon } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import axios from 'axios';


class App extends Component{
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    axios.post('');
  }
  
  render(){
    return (
      
      <div className="demo-big-content">
          <Layout>
           <Header className="header-color" title="Matters" scroll style={{color: 'black'}}>
            <Navigation >
                <Link style={{color: 'black'}} to="/landingPage">Feed</Link>
                <Link style={{color: 'black'}} to="/logIn_Register">Log In / Register</Link>
                <Link style={{color: 'black'}} to="/aboutUs">About</Link>
                <Badge text="1" overlap>
                    <Icon name="account_box" />
                </Badge>

            </Navigation>
          </Header>  

          <Content>
          <div className="page-content" />
              {/* <Main/> */}
          </Content>

          </Layout>
                        
          <Main/>            
            
      </div>
    );
  }
}

export default App;
