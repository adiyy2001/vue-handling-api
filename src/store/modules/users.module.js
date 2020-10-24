import { getUsers } from '../../api/users.js';

const state = {
    users = []
}

const getters = {
    getUsers(state ) {
        return state.users;
    }
}

const actions = {
    async fetchUsers({ commit }) {
        try {
            const response = await getUsers();
        } catch(err) {
            throw new err
        }
    }
}

const mutations = {
    SET_USERS(state, data) {
        state.users = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}