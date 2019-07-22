const INITIAL_STATE = { error: '', message: '', content: '', albums: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      return { ...state, error: '', message: '', albums: action.payload };
    case "INSERT_ALBUM":
      return { ...state, error: '', message: '', album: { data: state.album.data.filter(({ id }) => id != action.payload.data) } };
    case "REMOVED_ALBUM":
      return { ...state, error: '', message: '', albums: { data: state.albums.data.filter(({ id }) => id !== action.payload.data) } };
    case "NEW_ALBUM":
      return { ...state, error: '', message: '', album: action.payload };
    case "EDIT_ALBUM":
      return { ...state, error: '', message: '', album: action.payload };
    case "AUTH_ERROR":
      return { ...state, error: action.payload };
  }

  return state;
}
