<template>
    <div class="task-item" :data-complete="task.completed">
        <span class="task-description">{{ task.description }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Task } from '@/tasker';

export default defineComponent({
    name: 'TaskItem',
    props: {
        task: {
            type: Object as PropType<Task>,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
    .task-item {
        width: 100%;
        padding: 0.25em;
        cursor: pointer;
        transition: 200ms ease-in-out;
        font-size: 18px;

        &:hover {
            background: rgba(black, 0.03);
        }

        &:active {
            background: rgba(black, 0.05);
        }
    }
</style>
