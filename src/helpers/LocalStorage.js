export const getLocalData = (tableName) => {
  return JSON.parse(localStorage.getItem(tableName))
}

export const storeLocalData = (tableName, data) => {
  localStorage.setItem(tableName, JSON.stringify(data))
}

export const resetLocalData = (tableName) => {
  localStorage.setItem(tableName, null)
}
