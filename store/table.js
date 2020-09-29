import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    tableData: [
        { id: uuidv4(), name: 'Марина', phone: '1111111', parent: null },
        { id: uuidv4(), name: 'Петр', phone: '22222222222', parent: null },
        { id: uuidv4(), name: 'Алексей', phone: '3333333', parent: null }
    ],

    isSortedByName: false,

    isSortedByPhone: false,
})

export const mutations = {
    sortTableByName(state) {
        state.isSortedByName = !state.isSortedByName

        if (!state.isSortedByName) {
            state.tableData.sort((a,b) => a.name > b.name ? 0 : -1)
        } else {
            state.tableData.sort((a,b) => a.name > b.name ? -1 : 0)
        }
    },

    sortTableByPhone(state) {
        state.isSortedByPhone = !state.isSortedByPhone

        if (!state.isSortedByPhone) {
            state.tableData.sort((a,b) => a.phone > b.phone ? 0 : -1)
        } else {
            state.tableData.sort((a,b) => a.phone > b.phone ? -1 : 0)
        }
    }
}

export const actions = {
    sortTableByName({ commit }) {
        commit('sortTableByName')
    },

    sortTableByPhone({commit}) {
        commit('sortTableByPhone')
    }
}

export const getters = {
    tableData: s => s.tableData
}