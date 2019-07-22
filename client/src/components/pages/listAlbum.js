import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbumsWithoutCollection, insertAlbumIntoCollection } from '../../actions/album';


class listAlbum extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getAlbumsWithoutCollection();
    }

    handleClick = (event) => {
        let data = { id: event.target.value, collection_id: 3 };
        this.props.insertAlbumIntoCollection(data);
    }

    render() {
        let listAlbum = [];
        if (this.props.album !== undefined && !this.props.album.error) {
            listAlbum = this.props.album.data.map(album => {
                return (
                    <tr>
                        <td><img className="uk-border-rounded" src={album.cover_img} width="200" height="200"></img></td>
                        <td className="uk-text-left">
                            Artist: {album.Artist} | Album Name: {album.Name}
                        </td>
                        <td className="uk-text-truncate">{album.Songs.length} Songs</td>
                        <td className="uk-text-center"><button className="uk-button uk-button-text" onClick={this.handleClick} value={album.id}>Add to Collection</button></td>
                    </tr>
                );
            })
        }

        return (
            <div className="uk-overflow-auto uk-animation-slide-top-medium">
                <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                    <thead>
                        <tr>
                            <th className="uk-table-expand">Cover Image</th>
                            <th className="uk-table-expand">Artist | Album Name</th>
                            <th className="uk-table-expand">Songs</th>
                            <th className="uk-table-expand">Add to collection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listAlbum}
                    </tbody>
                </table>
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

export default connect(mapStateToProps, { getAlbumsWithoutCollection, insertAlbumIntoCollection })(listAlbum);
