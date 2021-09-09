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

const initialState = {
  channels: [],
  channel: {},
  response: [],
  singledata: [],
  loading: true,
  msg: "",
};

const channelPartnerProfileReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANNEL_PARTNER_PROFILE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CHANNEL_PARTNER_PROFILE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CHANNEL_PARTNER_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CHANNEL_PARTNER_PROFILE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CHANNEL_PARTNER_PROFILE_SUCCESS:
      return {
        ...state,
        result: state.result.map((item) =>
          item._id === action.result.data._id ? action.result.data : item
        ),
        singledata: [],
        loading: action.payload,
        msg: action.msg,
      };
    case UPDATE_CHANNEL_PARTNER_PROFILE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_CHANNEL_PARTNER_PROFILE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_CHANNEL_PARTNER_PROFILE_SUCCESS:
      return {
        ...state,
        singledata: action.result,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_CHANNEL_PARTNER_PROFILE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };
    case SET_RESPONSE:
      return {
        ...state,
        response: {},
        loading: action.payload,
        msg: action.msg,
      };
    default:
      return state;
  }
};

export default channelPartnerProfileReducers;
