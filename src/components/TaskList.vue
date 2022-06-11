<template>
    <div v-for="task in $store.state.tasks" :key="task.id">
        {{ task.description }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '@/tasker';

export default defineComponent({
    name: 'TaskList',
    mounted() {
        fetch('http://api.notyoursoftware.com/v1/public/tasker/task/all')
            .then((response) => response.json())
            .then((data: Task[]) => this.$store.commit('setTasks', data));
    },
});
</script>

<style scoped lang="scss">

</style>
