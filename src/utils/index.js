import strings from '../helpers/Strings'

export const loginThisUser = (data) => {
  localStorage.setItem(strings.LOGIN_DATA, JSON.stringify(data))
}

export const logoutThisUser = () => {
  localStorage.removeItem(strings.LOGIN_DATA)
}

export const isLogin = () => {
  if (localStorage.getItem(strings.LOGIN_DATA)) {
    return true
  }

  return false
}