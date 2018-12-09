import React, {PureComponent} from'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

/*Comonents*/
import Search from './Search';

class Header extends PureComponent {
    state = {
        bg: {background: "linear-gradient( transparent)"},
        searchVisible: false,
        movieClass: "navlink",
        tvClass: "navlink"
    }
    
    /*Methods*/
    listenScrollEvent = e => {
        if (window.scrollY > 55) {
          this.setState({bg: {backgroundColor: "#181A1D"}})
        } else {
          this.setState({bg: {background: "linear-gradient( transparent)"}})
        }
    }
    
    handleShowSearch = () => {
        this.setState(prevState => ({
            searchVisible: true    
        }));
        if (!this.state.searchVisible) {
            
        }
    }
    
    handleHideSearch = () => {
        this.setState(prevState => ({
            searchVisible: false    
        }));
    }
    
    handleLinkClass=() => {
        if (window.location.hash.split('/')[1] === "movies") {
            this.setState({
                movieClass: "navlink active",
                tvClass: "navlink" 
            });
        }
        else if (window.location.hash.split('/')[1] === "tv") {
            this.setState({
                movieClass: "navlink",
                tvClass: "navlink active" 
            });
        }
    }

    /*Mount*/
    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent);
        this.handleLinkClass();
    }
    
    /*Update*/
    componentDidUpdate = () => {
        window.addEventListener('scroll', this.listenScrollEvent);
        this.handleLinkClass();
    }
    
    render() {
        
        return (
            <div
                className="header"
                style = {this.state.bg}
            >
                <Link to="/"><h1 className="logo">Movie<span className="white-text">Night</span></h1></Link>
                <div className="tabs">
                    <Link className={this.state.movieClass} to="/movies"><h3>Movies</h3></Link>
                    <Link className={this.state.tvClass} to="/tv"><h3>TV Shows</h3></Link>
                </div>
                <div
                    className="search-header"
                    onClick={this.handleShowSearch}
                >
                    <FontAwesome className="search-icon" name='search' />
                    <h3>Search</h3>
                </div>
                <Search
                    searchVisible={this.state.searchVisible}
                    hideSearch={this.handleHideSearch}
                    match={this.props.match}
                />
            </div>
        );   
    }
}

export default Header;