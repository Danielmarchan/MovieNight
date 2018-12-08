import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

/*Components*/
import PosterCarouselItem from './PosterCarouselItem';

class Search extends PureComponent {
    constructor() {
        super();
        this.state = {
            query: "" ,
            results: [],
            searchContainerClass: "search-input-container"
        }
    }
    
    /*Refs*/
    searchInput = React.createRef()
    
    //Methods
    handleGetData = (endpoint) => {
        
        axios.get(endpoint)
            .then(response => {
                if (this.state.query.length !== 0) {
                     this.setState({
                        results: response.data.results
                    });
                }
                else {
                    this.setState({
                        results: []
                    });
            }
            })
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
    }
    
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
        
        if (this.props.searchVisible) {
            console.log("searching...");
            let searchQuery = this.state.query.replace(' ', '%20');
            this.handleGetData(`https://api.themoviedb.org/3/search/multi?api_key=9512b36f031887e7c9ad226e2c26a6b2&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
        }
    }
    
    handleFocusIn = () => {
        this.setState({searchContainerClass: "search-input-container active"});
    }
    
    handleFocusOut = () => {
        this.setState({searchContainerClass: "search-input-container"});
    }
    
    handleHide = () => {
        this.props.hideSearch();
        this.setState({
            query: "",
            results: []
        })
    }
    
    render () {
        return (
          <div className={"search visible-" + this.props.searchVisible}>
            <FontAwesome 
                name="times"
                onClick={this.handleHide}    
            />
            <div 
                className={this.state.searchContainerClass}
            >
            
                <FontAwesome name="search" />
                <input
                    type="text"
                    className="search-input"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Search for Movies and TV Shows"
                    onFocus={this.handleFocusIn}
                    onBlur={this.handleFocusOut}
                    ref={input => input && input.focus()}
                />
            </div>
            <div className="search-grid">
                {
                    this.state.results.map(item => {
                        if (item.media_type != "person") {
                            return (
                                <PosterCarouselItem 
                                    item={item}
                                    key={item.id}
                                    match={this.props.match}
                                    media={item.media_type}
                                    hideSearch={this.handleHide} 
                                />
                            )
                        }
                    })
                }
            </div>
          </div>
        );
    }
}

export default Search;