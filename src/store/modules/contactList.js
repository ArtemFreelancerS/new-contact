
export default {
    namespaced: true,
    state() {
        return {
            list: [
                { name: 'Artem', phone: '8800' }
            ]
        };
    },
    mutations: {
        create(state, { data }) {
            state.list.push(data)
        },
        remove(state, { index }) {
            state.list.splice(index, 1)
        },
        edit(state, { index, data }) {
            state.list[index] = data
        },
    },
    actions: {
        create({ commit }, { data }) {
            commit('create', { data });
        },
        remove({ commit }, { index }) {
            commit('remove', { index });
        },
        edit({ commit }, { index, data }) {
            commit('edit', { index, data });
        },
    },
    getters: {
        getList: state => state.list
    }
}