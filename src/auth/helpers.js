import Cookies from 'js-cookie'

export const setCookie = (key, value) => {
  if (window !== 'undefined') {
    Cookies.set(key, value, {expires: 1})
  }
}

export const removeCookie = (key) => {
  if (window !== 'undefined') {
    Cookies.remove(key, {expires: 1})
  }
}

export const getCookie = (key) => {
  if (window !== 'undefined') {
    return Cookies.get(key)
  }
}

export const setLocalStorage = (key, value) => {
  if (window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const removeLocalStorage = (key) => {
  if (window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

export const getLocalStorage = (key) => {
  if (window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key))
  }
}

export const authenticate = (res, next) => {
  setCookie('token', res.data.token)
  setLocalStorage('user', res.data.user)
  next()
}

export const isAuthenticate = () => {
  if (window !== 'undefined') {
    const hasCookie = getCookie('token')
    if (hasCookie) {
      if (getLocalStorage('user')) {
        return getLocalStorage('user')
      } else {
        return false
      }
    }
  }
}
