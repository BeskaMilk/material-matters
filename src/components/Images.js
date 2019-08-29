import React, { Component } from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

export class Images extends Component {
    state= {
        images: [],
        count: 30,
        start: 1
    }
  

    componentDidMount(){
        const { count, start } = this.state;
        console.log("componentDidMount");
        axios
            .get('https://api.Unsplash.com/photos/?client_id=277aa79f642c5f5ad25a6fe715cedf4a24e8a74ce5d9f9f32970f30cdd2908c9', function(data) {
                console.log(data);
            }) //.get(`/api/photos?count=${count}&start=${start}`)
            .then(res => this.setState({ images: res.data }));
        
    }

    fetchImages = () => {
        console.log(123);
        const { count, start } = this.state;
        
        this.setState({start: this.state.start + count});
        axios
            .get('https://api.Unsplash.com/photos/?client_id=277aa79f642c5f5ad25a6fe715cedf4a24e8a74ce5d9f9f32970f30cdd2908c9', function(data) {
                console.log(data);
            }) 
            .then(res => 
                this.setState({ images: this.state.images.concat(res.data) })
            );
    }

    render() {
        console.log(this.state);
        return (
            <div className="images">
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    { this.state.images.map(image => (
                        <Image key={image.id} image={image} />
                    )) }
                </InfiniteScroll>
            </div>
        );
    }

}

export default Images
