import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Album extends Component {
    constructor(props) {
        super(props);
        
    }

    click = () => {
        this.props.removeAlbum(this.props.id);
    }

    render() {
        return (
            <div className="uk-card uk-card-default uk-animation-slide-top-medium">
                <div className="uk-card-media-bottom">
                    <img src={this.props.img} alt="" className="fixed-height"></img>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title uk-text-center">{this.props.title}</h3>
                    <h5 className="uk-text-center">{this.props.name}</h5>
                    <hr/>
                    {this.props.songs.map(song => {
                        return(
                            <div className="uk-clearfix">
                                <div className="uk-float-right">
                                    <p>{song.Duration}</p>
                                </div>
                                <div className="uk-float-left">
                                    <p>{song.Name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="uk-card-footer uk-text-center">
                    <a href="#" className="uk-button uk-button-text uk-text-danger" onClick={this.click}>Delete Album</a>
                    
                </div>
                <div className="uk-card-footer uk-text-center">
                    <Link to={{ pathname: '/edit-album', state: { albumId: this.props.id }}} className="uk-button uk-button-text">Edit Album</Link>
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        albums: state.album.albums
    };
}

export default connect(mapStateToProps)(Album);
