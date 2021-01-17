import {getSessionToken, setUpdateToken, setSessionToken} from "./token"
import AsyncStorage from '@react-native-community/async-storage';

const BASE_URL = 'https://localhost:19006/'

const success = (value) => {
  return new Promise((resolve) => {resolve(value);
  });
};

const failure = (value) => {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    getSessionToken().then((res) => {
      console.log(res)
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => reject(err));
  });
};

export const login = async (email, password) => {
  return fetch(`${BASE_URL}login/`,
  {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: email,
    })
  }).then(res => res.json())
  .then(async data =>{
    if (data.error){
      return failure(data)
    }
    else {
      await setUpdateToken(data.update_token);
      await setSessionToken(data.session_token);
      return success(data)
    }
  })
  }

export const register = async (email, password, name) => {
  return fetch(`${BASE_URL}register/`,
  {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      user_id:"user_id",
    })
  }).then(res => res.json())
  .then(async data =>{
    console.log(data)
    if (data.error){
      return failure(data)
    }
    else {
    await setUpdateToken(data.update_token);
    await setSessionToken(data.session_token);
    return success(data)
  
    }
  })
}

export const logout = () => {
    AsyncStorage.removeItem('@update_token');
    AsyncStorage.removeItem('@session_token');
}