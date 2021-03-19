import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../actions/usertype'

export const fetchUsers = () => {
  return (dispatch: any) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {

        // response.data is the users

       const users = response.data

       console.log(users)
     
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (users:any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error:any) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}






/* import {Dispatch} from "redux";
import {

    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
}
from "./usertype";
import axios from "axios";

export const fetchUsers = (users: string) => async (dispatch: Dispatch<usersDispatchTypes>)  => {
  try {
    dispatch({
      type: FETCH_USERS_REQUEST
    })

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type:  FETCH_USERS_FAILURE
    })
  }
};



*/

