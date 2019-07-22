import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderTemplate extends Component {
  constructor(props) {
    super(props);

  }
  renderLinks() {

    return [
      <li key={`${1}header`}>
        <Link to="/">Collection #1</Link>
      </li>
    ];
  }

  change = (event) => {
    console.log(event);
    this.props.handleChange(event);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="uk-search uk-search-navbar uk-margin-small-top search-bar-width uk-margin-small-right">
                <input className="uk-search-input" type="search" placeholder="Search" onChange={this.change} />
              </div>
              <Link to="add-album">
                <button className="uk-button uk-button-text">Add New Album</button>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav navbar-right">
                {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.album.albums,
  };
}

export default connect(mapStateToProps)(HeaderTemplate);
