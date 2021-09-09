import axios from "axios";
import {
  ADD_CHANNEL_PARTNER_PROFILE_FAIL,
  ADD_CHANNEL_PARTNER_PROFILE_REQUEST,
  ADD_CHANNEL_PARTNER_PROFILE_SUCCESS,
  GET_SINGLE_CHANNEL_PARTNER_PROFILE_FAIL,
  GET_SINGLE_CHANNEL_PARTNER_PROFILE_REQUEST,
  GET_SINGLE_CHANNEL_PARTNER_PROFILE_SUCCESS,
  UPDATE_CHANNEL_PARTNER_PROFILE_FAIL,
  UPDATE_CHANNEL_PARTNER_PROFILE_REQUEST,
  UPDATE_CHANNEL_PARTNER_PROFILE_SUCCESS,
  SET_RESPONSE,
} from "../Constant/channelPartnerConstant";

// load single
const loadchannelPartnerDetail = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_CHANNEL_PARTNER_PROFILE_REQUEST,
      payload: result,
    });
    let token = localStorage.getItem("etoken");
    // console.log(id);
    let OPTION = {
      url: `http://localhost:5000/channelprofile/findOne/${id}`,
      method: "GET",
      data: result,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    // console.log(OPTION);

    axios(OPTION)
      .then((res) => {
        dispatch(loadchannelPartnerDetailPre(res.data));
        // console.log(res.data);
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_CHANNEL_PARTNER_PROFILE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadchannelPartnerDetailPre = (data) => {
  console.log(data);
  return {
    type: GET_SINGLE_CHANNEL_PARTNER_PROFILE_SUCCESS,
    result: data,
    loading: false,
    msg: "SUCCESS",
  };
};

// add
const addchannelPartnerDetail = (result) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CHANNEL_PARTNER_PROFILE_REQUEST,
      payload: result,
    });
    let token = localStorage.getItem("etoken");
    let OPTION = {
      url: "http://localhost:5000/channelprofile/create",
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(addchannelPartnerDetailPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_CHANNEL_PARTNER_PROFILE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};

export const addchannelPartnerDetailPre = (data) => {
  return {
    type: ADD_CHANNEL_PARTNER_PROFILE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update
const updatechannelPartnerDetail = (result, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CHANNEL_PARTNER_PROFILE_REQUEST,
      payload: result,
    });
    let token = localStorage.getItem("etoken");

    let OPTION = {
      url: `http://localhost:5000/channelprofile/update/${id}`,
      method: "PUT",
      data: result,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    console.log(OPTION);
    axios(OPTION)
      .then((res) => {
        dispatch(updatechannelPartnerDetailPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CHANNEL_PARTNER_PROFILE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const updatechannelPartnerDetailPre = (data) => {
  console.log(data);
  return {
    type: UPDATE_CHANNEL_PARTNER_PROFILE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const setResponse = () => {
  return function (dispatch) {
    dispatch(setResponseSuccess());
  };
};
export const setResponseSuccess = (data) => {
  return {
    type: SET_RESPONSE,

    payload: false,
    msg: "SUCCESS",
  };
};

export {
  updatechannelPartnerDetail,
  addchannelPartnerDetail,
  loadchannelPartnerDetail,
  setResponse,
};
