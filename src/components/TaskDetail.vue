<template>
    <div class="task">
        <h3> {{ task.title }} </h3>
        <div class="icons">
            <i @click.prevent="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i  class="material-icons"
            :class="{active: task.isFav}"
            @click.prevent="taskStore.toggoleFav(task.id)"
            >favorite
        </i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStores';
    export default {
        props:[
            "task"
        ],
        setup() {
            const taskStore = useTaskStore()
            return {taskStore}
        }
    }
</script>