export const localStorageMiddleware = store => next => action => {
    const result = next(action)
    localStorage.setItem("saved_state", JSON.stringify(store.getState()))
    return result
}

export const preloadState = () => {
    const saved = localStorage.getItem("saved_state")
    return saved && JSON.parse(saved)
}
