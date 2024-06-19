import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "@/redux/action/user/type";

const initialState = {
  data: null,
  error: null,
  pending: false,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        pending: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        data: null,
        error: null,
        pending: true
      };
    default:
      return state;
  }
};

export default dataReducer;
