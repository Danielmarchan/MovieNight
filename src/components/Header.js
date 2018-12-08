import React, {PureComponent} from'react';
import FontAwesome from 'react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

/*Comonents*/
import Search from './Search';

class Header extends PureComponent {
    state = {
        bg: {background: "linear-gradient( transparent)"},
        searchVisible: false
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

    /*Mount*/
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    
    render () {
        return (
            <div
                className="header"
                style = {this.state.bg}
            >
                <Link to="/"><h1 className="logo">Movie<span className="white-text">Night</span></h1></Link>
                <div className="tabs">
                    <NavLink className="navlink" to="/movies"><h3>Movies</h3></NavLink>
                    <NavLink className="navlink" to="/tv"><h3>TV Shows</h3></NavLink>
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