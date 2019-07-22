import axios from 'axios';
import { browserHistory } from 'react-router';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';

export function getAlbums({ collectionId }) {
  return function (dispatch) {
    axios.post(`${API_URL}/testify/album/GetAllAlbumsByCollection`, { collectionId })
      .then((response) => {
        dispatch({
          type: "FETCH_ALBUMS",
          payload: response.data,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR");
      });
  };
}

export function getAlbumsWithoutCollection() {
  return function (dispatch) {
    axios.get(`${API_URL}/testify/album/GetAllAlbumsWithoutCollection`)
      .then((response) => {
        dispatch({
          type: "NEW_ALBUM",
          payload: response.data,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR");
      });
  };
}

export function insertAlbumIntoCollection(data) {
  return function (dispatch) {
    axios.post(`${API_URL}/testify/album/InsertAlbumIntoCollection`, data)
      .then((response) => {
        dispatch({
          type: "INSERT_ALBUM",
          payload: response.data,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR");
      });
  };
}

export function removeAlbumFromCollection(data) {
  return function (dispatch) {
    axios.post(`${API_URL}/testify/album/RemoveAlbumFromCollection`, data)
      .then((response) => {
        dispatch({
          type: "REMOVED_ALBUM",
          payload: response.data,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR");
      });
  };
}

export function editAlbumData(data) {
  return function (dispatch) {
    axios.post(`${API_URL}/testify/album/EditAlbum`, data)
      .then((response) => {
        dispatch({
          type: "EDIT_ALBUM",
          payload: response.data,
        });
        browserHistory.push('/');
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR");
      });
  };
}



