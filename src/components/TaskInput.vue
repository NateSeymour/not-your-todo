<template>
    <div class="task-input">
        <label for="task-description-input">Task</label>
        <input @keyup.enter="submitTask" ref="description" type="text" id="task-description-input">

        <label for="task-submit-input">Submit Task</label>
        <input ref="submit" @click="submitTask" type="button" id="task-submit-input" value="Submit">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TaskInput',
    methods: {
        submitTask() {
            if ((this.$refs.description as HTMLInputElement).value === '') return;

            this.$store.dispatch('addTaskByDescription', (this.$refs.description as HTMLInputElement).value);

            (this.$refs.description as HTMLInputElement).value = '';
            (this.$refs.description as HTMLInputElement).focus();
        },
    },
});
</script>

<style scoped lang="scss">
    $border-radius: 0.25em;
    $border-style: solid 1px;

    .task-input {
        display: flex;
        flex-direction: row;

        label {
            display: none;
        }

        input[type=text] {
            flex-grow: 100;
            border-radius: $border-radius 0 0 $border-radius;
        }

        input[type=button] {
            border-radius: 0 $border-radius $border-radius 0;
        }

        input[type=text], input[type=button] {
            border: $border-style;
            padding: 0.5em;
        }
    }
</style>
