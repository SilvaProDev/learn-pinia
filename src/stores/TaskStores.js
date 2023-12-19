import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state:() =>({
        tasks: [],
       isLoading: false,
    }),
    getters:{
        favs(){
            return this.tasks.filter(t=>t.isFav);
        },

        favCount(){
            return this.tasks.reduce((p,c) =>{
                return c.isFav ? p+1 : p
            }, 0)
        },
        totalCount(){
        return this.tasks.length;
        }
    },
    actions:{
        async getTasks(){
            this.isLoading = true
            // let res = ''
           const  res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.isLoading = false
        },
       async addTask(task){
        this.tasks.push(task)

         const  res = await fetch('http://localhost:3000/tasks',{
            method:'POST',
            body:JSON.stringify(task),
            Headers:{'Content-Type': 'application/json'}
          })
          if(res.error){
            console.log(res.error)
          }
           
        },
       async deleteTask(id){
            this.tasks = this.tasks.filter(item =>{
                return item.id !== id
            })
            const  res = await fetch('http://localhost:3000/tasks/'+id,{method:'DELETE'});

          if(res.error){
            console.log(res.error)
          }
        },
       async toggoleFav(id){
            const task = this.tasks.find(item => item.id == id)
           return  task.isFav = !task.isFav

           const  res = await fetch('http://localhost:3000/tasks/'+id,{
            method:'PATCH',
            body:JSON.stringify({isFav: task.isFav}),
            Headers:{'Content-Type': 'application/json'}
          })
          if(res.error){
            console.log(res.error)
          }
        }
    }
})
