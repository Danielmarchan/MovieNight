import React, {Component} from 'react';
import axios from 'axios';

class MovieInfo extends Component {
    
    state = {
        movie: {}
    }
    
    //Method
    handleGetData = (endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                 this.setState({
                    movie: response.data
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    componentDidMount = () => {
        this.handleGetData(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US
`);
    }
    
    render () {
        return(
            <div>
                <img src=""/>
            </div>
        );
    }
}

export default MovieInfo;