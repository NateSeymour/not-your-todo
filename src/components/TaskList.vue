<template>
    <div class="task-list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GetAllTasksRB } from '@/tasker';
import { mapState } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';

export default defineComponent({
    name: 'TaskList',
    components: { TaskItem },
    mounted() {
        fetch('http://api.notyoursoftware.com/v1/public/tasker/task/all')
            .then((response) => response.json())
            .then((data: GetAllTasksRB) => this.$store.commit('setTasks', data.tasks));
    },
    computed: mapState(['tasks']),
});
</script>

<style scoped lang="scss">

</style>
