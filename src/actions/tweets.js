import uuid from "uuid";
import axios from "axios";

// Action generators
export const addTweet = ({ handle, _id }) => ({
  type: "ADD_TWEET",
  account: {
    handle,
    _id
  }
});

export const removeTweet = ({ id } = {}) => ({
  type: "REMOVE_TWEET",
  tweet: {
    id
  }
});

export const startAddTweet = ({ handle = "" } = {}) => {
  return (dispatch) => {

    const axiosConfig = {
      method: "post",
      url: "/api/users/me/trackers/tweets",
      data: {
        handle
      }
    }

    axios(axiosConfig)
      .then((response) => {
        if(response.status !== 200){
          throw Error(response.message);
        } else {
          dispatch(addTweet(response.data))
        }
    });
  }
};