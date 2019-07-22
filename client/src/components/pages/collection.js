import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from '../template/album';
import { getAlbums } from '../../actions/album';
import { removeAlbumFromCollection } from '../../actions/album';
import HeaderTemplate from '../template/header';

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredAlbumName: ''
    }

    this.removeAlbum = this.removeAlbum.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    let data = { collectionId: 1 };

    this.setState({ albums: this.props.getAlbums(data) });

  }

  removeAlbum(albumId) {
    let data = { id: albumId, collection_id: 1 };
    this.props.removeAlbumFromCollection(data);
  }

  handleChange(event) {
    this.setState({ filteredAlbumName: event.target.value });
  }


  render() {
    let allAlbums = [];

    if (this.props.albums != false) {

      let filteredAlbums = this.props.albums.data.filter(({ Name, Artist }) =>
        Name.toLowerCase().includes(this.state.filteredAlbumName) ||
        Artist.toLowerCase().includes(this.state.filteredAlbumName));

      allAlbums = filteredAlbums.map(album => {
        return (
          <div className="uk-margin-right">
            <Album img={album.cover_img} title={album.Artist} name={album.Name} songs={album.Songs} id={album.id} removeAlbum={this.removeAlbum} />
          </div>
        );
      });
    }

    return (
      <div>
        <HeaderTemplate handleChange={this.handleChange}/>
        <div className="uk-flex uk-flex-center uk-flex-auto" uk-grid="masonry: true">
          {allAlbums}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.album.albums,
    album: state.album.album
  };
}

export default connect(mapStateToProps, { getAlbums, removeAlbumFromCollection })(Collection);
