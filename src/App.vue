<template>
  <div>
    <main>
      <header>
        <img src="./assets/pinia-logo.svg" alt="Pinia logo">
        <h1>{{taskStore.name}}</h1>
      </header>
      <!-- task form -->
      <div class="new-task-form">
        <AddTask/>
      </div>
 
      <!-- filter task -->
      <nav class="filter">
        <button @click.prevent="filters = 'all'">All tasks</button>
        <button @click.prevent="filters = 'favs'">favs tasks</button>
      </nav>
      <!-- loading -->
      <div class="isLoading" v-if="isLoading">
        Chargement des données ...
      </div>
      <!-- show all task -->
        <div class="task-list" v-if="filters === 'all'">
          <p>You have {{ totalCount }} task</p>
          <div  v-for="task in tasks" :key="task.id">
            <TaskDetail :task="task"/>
          </div>
        </div>

        <!-- show favs task -->
        <div class="task-list" v-if="filters === 'favs'">
          <p>You have {{ favCount }} Favorite task</p>
          <div  v-for="task in favs" :key="task.id">
            <TaskDetail :task="task"/>
          </div>
        </div>

    </main>
  </div>
</template>

<script>
import TaskDetail from "./components/TaskDetail.vue"
import {ref} from "vue"
import {useTaskStore} from "./stores/TaskStores"
import AddTask from './components/addTask.vue'
import { storeToRefs } from 'pinia'

  export default {
    components:{
  TaskDetail,
        AddTask,
},
    setup() {
      const taskStore = useTaskStore()
      taskStore.getTasks()
      const {totalCount, favCount, favs, tasks, isLoading} = storeToRefs(taskStore)
      const filters = ref("all")
      return {taskStore, filters,totalCount, favCount, favs, tasks, isLoading}
    }
  }
</script>