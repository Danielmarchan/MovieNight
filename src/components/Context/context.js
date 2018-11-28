import React, {Component} from 'react';
import axios from 'axios';

const MovieNightContext = React.createContext();

export class Provider extends Component {
    
    //For this function to work, the component needs to pass "this" and an endpoint as an argument
    handleGetData = (component, endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                 component.setState({
                    data: response.data.results
                });
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
            
    }
    
    render() {
        return(
          <MovieNightContext.Provider value={{
            actions: {
                 getData: this.handleGetData
            }
          }}>
          
          {this.props.children}
          
          </MovieNightContext.Provider>
        );
    }
}

export const Consumer = MovieNightContext.Consumer;