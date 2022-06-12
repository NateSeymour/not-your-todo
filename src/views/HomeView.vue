<template>
    <div class="home">
        <div class="task-area">
            <TaskList />
            <TaskInput />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from '@/components/TaskList.vue';
import TaskInput from '@/components/TaskInput.vue';

export default defineComponent({
    name: 'HomeView',
    components: { TaskInput, TaskList },
});
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .task-area {
            height: 80%;
            width: 50%;

            .task-list {
                height: 75%;
                width: 100%;
                overflow-y: scroll;
            }

            .task-input {
                width: 100%;
            }
        }
    }
</style>
