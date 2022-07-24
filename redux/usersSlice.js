import { createSlice } from "@reduxjs/toolkit";
import { setFavs, setFav } from "./roomsSlice";
import api from "../api";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoggedIn: false,
    token: null,
    profile: null,
    userRooms: null,
    hosting: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setUserRooms(state, action) {
      state.userRooms = action.payload;
    },
    setHosting(state, action) {
      state.hosting = !state.hosting;
    },
  },
});

export const { login, logout, setProfile, setUserRooms, setHosting } =
  userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form);
    if (id && token) {
      dispatch(login({ id, token }));
    }
  } catch (e) {
    alert(e);
  }
};

export const getFavs = () => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  try {
    const { data } = await api.favs(id, token);
    dispatch(setFavs(data));
  } catch (e) {
    console.warn(e);
  }
};

export const toggleFav = (roomId) => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  try {
    const { status } = await api.toggleFavs(id, roomId, token);
    dispatch(setFav({ roomId }));
  } catch (e) {
    console.warn(e);
  }
};

export const getUser = () => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  try {
    const { data } = await api.getUser(id, token);
    dispatch(setProfile(data));
  } catch (e) {
    alert(e);
  }
};

export const getUserRooms = () => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  try {
    const { data } = await api.getUserRooms(id, token);
    dispatch(setUserRooms(data));
  } catch (e) {
    alert(e);
  }
};

export const toggleHosting = () => async (dispatch) => {
  try {
    dispatch(setHosting());
  } catch (e) {
    console.warn(e);
  }
};

export default userSlice.reducer;
