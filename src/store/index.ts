import { Store, createStore } from 'vuex';
import { Task } from '@/tasker';

export interface State {
    tasks: Task[],
}

declare module '@vue/runtime-core' {
    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

const state : State = {
    tasks: [],
};

export default createStore({
    state,
    getters: {
    },
    mutations: {
        setTasks(currentState, tasks: Task[]) {
            state.tasks = [...tasks];
        },
    },
    actions: {
    },
    modules: {
    },
});
