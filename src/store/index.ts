import { Store, createStore } from 'vuex';
import { Task } from '@/tasker';

export interface State {
    tasks: Task[],
    sessionCreatedTaskCount: number,
}

interface updateTaskPayload {
    oldTask: Task,
    newTask: Task,
}

declare module '@vue/runtime-core' {
    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

export default createStore({
    state: {
        tasks: [],
        sessionCreatedTaskCount: 0,
    } as State,
    getters: {
    },
    mutations: {
        setTasks(state: State, tasks: Task[]) {
            state.tasks = [...tasks];
        },
        addTask(state: State, task: Task) {
            state.tasks = [task, ...state.tasks];
        },
        updateTask(state: State, payload: updateTaskPayload) {
            state.tasks[state.tasks.indexOf(payload.oldTask)] = payload.newTask;
        },
    },
    actions: {
        addTaskByDescription({ commit, state }, description: string) {
            const tempTask: Task = {
                id: `webinterface-temp-${state.sessionCreatedTaskCount}`,
                description,
                completed: false,
            };

            commit('addTask', tempTask);

            state.sessionCreatedTaskCount++;

            fetch('https://api.notyoursoftware.com/v1/public/tasker/task', {
                method: 'POST',
                body: JSON.stringify({
                    description: tempTask.description,
                }),
            }).then((response) => response.json())
                .then((data: Task) => {
                    commit('updateTask', {
                        oldTask: tempTask,
                        newTask: data,
                    });
                });
        },
    },
    modules: {
    },
});
