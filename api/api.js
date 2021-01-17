import { getUpdateToken, getSessionToken, setSessionToken } from "./token"
import { AsyncStorage } from "@react-native-community/async-storage";

const BASE_URL = 'http://localhost:5000'

export async function addTransactionEntry(latitude, longitude, item_type, amount, business_name, rating) {
  const session_token = await getSessionToken()
  return fetch(`${BASE_URL}entry/`,
  {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + session_token
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
      item_type: item_type,
      description: description
    })
  }).then(data=> data.json())
}

export async function viewEntriesAtCoord(latitude, longitude) {
  const session_token = await getSessionToken()
    return fetch(`${BASE_URL}entries/`,
    {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
      })
    }).then(data=> data.json())

}

export async function viewAllEntries() {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}entries/`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}

export async function viewFriendsEntries(latitude, longitude) {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}friend-entries/`,
    {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
      })
    }).then(data=> data.json())
}

export async function searchFriend(query) {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}friend-search/${query}`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}

export async function addFriends(friendList) {
    const session_token = getSessionToken()
    return fetch(`${BASE_URL}friends/`,
    {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      },
      body: JSON.stringify({
        friends: friendList,
      })
    }).then(data=> data.json())
}

export async function deleteFriend(friend) {
    const session_token = getSessionToken()
    return fetch(`${BASE_URL}friends/${friend}`,
    {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}

export async function deleteEntry(entry) {
    const session_token = getSessionToken()
    return fetch(`${BASE_URL}entry/${entry}`,
    {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}