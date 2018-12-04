import React, {Component} from 'react';
import axios from 'axios';

class TvInfo extends Component {
    
    state = {
        tvShow: {}
    }
    
    //Method
    handleGetData = (endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                 this.setState({
                    tvShow: response.data
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    componentDidMount = () => {
        this.handleGetData(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US`);
    }
    
    render () {
        return(
            <div>
            </div>
        );
    }
}

export default TvInfo;