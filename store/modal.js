import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    isModalVisible: false,

    newUser: {
        name: '',
        phone: '',
        parent: ''
    }
})

export const mutations = {
    setModalVisibility(state, payload) {
        state.isModalVisible = payload
    },

    updateUserName(state, payload) {
        state.newUser.name = payload

        localStorage.setItem('userName', payload)
    },

    updateUserNumber(state, payload) {
        state.newUser.phone = payload

        localStorage.setItem('userPhone', payload)

    },

    updateUserParent(state, payload) {
        state.newUser.parent = payload

        localStorage.setItem('userParent', payload)

    },

    setUserNameFromStorage(state, payload) {
        state.newUser.name = payload
    },

    setUserPhoneFromStorage(state, payload) {
        state.newUser.phone = payload
    },

    addNewUser(state, payload) {
        payload.rootState.table.tableData.push({
            id: uuidv4(),
            name: state.newUser.name,
            phone: state.newUser.phone,
            parent: state.newUser.parent,
        })

        for (let prop in state.newUser) {
            state.newUser[prop] = ''
        }
    }

}

export const actions = {
    changeModalVisibility({ commit, getters }) {
        const flag = !getters.isModalVisible;
        commit('setModalVisibility', flag)
    },

    addNewUser({ commit, rootState, state }) {
        if (state.newUser.name !== '' && state.newUser.phone !== '') {
            const payload = {
                rootState
            }
            commit('addNewUser', payload)
        }
        else {
            alert('Необходимо заполнить поля Имя и Телефон!')
        }
    },
}

export const getters = {
    isModalVisible: s => s.isModalVisible,
    newUser: s => s.newUser
}