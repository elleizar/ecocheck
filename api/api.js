import { getSessionToken } from "./token"

const BASE_URL = 'http://localhost:5000/'

const success = (value) => {
    return new Promise((resolve) => {resolve(value);
    });
  };

export async function addTransactionEntry(latitude, longitude, item_type, amount, business_name, rating) {
  const session_token = await getSessionToken()
  return fetch(`${BASE_URL}transaction_entry/`,
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
      amount: amount,
      business_name: business_name,
      rating: rating
    })
  }).then(data => data.json())
}

export async function viewTransactionEntry(id) {
  const session_token = await getSessionToken()
    return fetch(`${BASE_URL}transaction_entries/${id}`,
    {
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + session_token
    }
    }).then(data=> data.json())

}

export async function viewAllTransactionEntries() {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}transaction_entries/`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}

export async function addBusiness(latitude, longitude, business_type, description, business_name, rating) {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}business/`,
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
        business_type: business_type,
        description: description,
        business_name: business_name,
        rating: rating
      })
    }).then(data=> data.json())
  }

export async function viewBusiness(id) {
const session_token = await getSessionToken()
    return fetch(`${BASE_URL}businesses/${id}`,
    {
    method: "POST",
    headers: {
        Authorization: 'Bearer ' + session_token
    }
    }).then(data=> data.json())

}

export const viewAllBusinesses = async () => {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}businesses/`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(res => { 
        return res.json()
      })
    .then(async data =>{
      return success(data)
    })
}

export async function viewProfile() {
    const session_token = await getSessionToken()
    return fetch(`${BASE_URL}profile/`,
    {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session_token
      }
    }).then(data=> data.json())
}