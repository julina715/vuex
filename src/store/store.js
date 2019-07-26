import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        data: [0, 1, 2, 3, 4, 5],
        price: 1200,
        onOff: false,
        pages: [
            { name: 'One', text: 'one page for something to you', value: '1111111111', color: 'red' },
            { name: 'Two', text: 'one page for something to you', value: '2222222222', color: 'green' },
            { name: 'Three', text: 'one page for something to you', value: '333333333', color: 'blue' },
        ]
    },
    getters: {
        filterData(state) {
            return (params) => {
                let index = params.index
                return state.data[index]
            }
        },
        handlePrice(state) {
            return (params) => {
                let n = params.num
                return n != 0 ?  state.price/n : 0
            }
        }
    },
    mutations: {
        changeOnOff(state, param) {
            let onOff = param.onOff
            state.onOff = onOff
        }
    },
    actions: {
        toChangeOnOff(context, payload) {
            setTimeout(() => {
                context.commit('changeOnOff', payload)
            }, 3000)
        }
    }
})