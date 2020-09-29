import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'mykey',
    paths: ['~/store/modal', '~/store/table'],
    storage: window.localStorage
  })(store)
}