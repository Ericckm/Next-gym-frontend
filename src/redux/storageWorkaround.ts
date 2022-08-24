import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// Workaround solution https://stackoverflow.com/questions/63568338/how-to-solve-redux-persist-failed-to-create-sync-storage-falling-back-to-noop-s

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    }
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

export default storage
