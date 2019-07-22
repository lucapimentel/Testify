import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editAlbumData } from '../../actions/album';

const form = reduxForm({
    form: 'album',
});

class EditAlbum extends Component {
    constructor(props) {
        super(props);

    }

    handleFormSubmit(formProps) {
        let data = { id: this.props.location.state.albumId, Name: formProps.Name, cover_img: formProps.cover_img, Artist: formProps.Artist };

        this.props.editAlbumData(data);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="uk-margin-medium">
                        <label>Cover Image URL</label>
                        <Field name="cover_img" className="form-control" component="input" type="text" />
                    </div>
                    <div className="uk-margin-medium">
                        <label>Album Name</label>
                        <Field name="Name" className="form-control" component="input" type="text" />
                    </div>
                    <div className="uk-margin-medium">
                        <label>Artist Name</label>
                        <Field name="Artist" className="form-control" component="input" type="text" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
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

export default connect(mapStateToProps, { editAlbumData })(form(EditAlbum));
