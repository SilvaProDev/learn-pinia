<template>
    <div>
        <form @submit.prevent="addNewTask">
            <input type="text" placeholder="add new task ..."
            v-model="newTask">

            <button>Add Task</button>
        </form>

    </div>
</template>

<script>
import {ref} from 'vue'
import { useTaskStore } from '@/stores/TaskStores'

    export default {
        setup (){
            const newTask = ref('')
            const taskStore = useTaskStore()

            const addNewTask = ()=>{
                if(newTask.value.length > 0){
                    taskStore.addTask({
                        title: newTask.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 1000)
                    })
                    newTask.value = ''
                }
            }
            return {addNewTask, newTask}
        }
    }
</script>