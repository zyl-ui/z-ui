// import Cookies from 'js-cookie'

// const TokenKey = 'ZYL-UPAS-TOKEN'

export function getToken() {
  return localStorage.getItem('token')
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem('token', token)
  // return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem('token')
  // return Cookies.remove(TokenKey)
}
