<template>
   <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input 
          type="text" 
          placeholder="enter the name you search"
          v-model="keyWord"/>&nbsp;
          <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'SearchItem',
    data(){
      return{
        keyWord:''
      }
    },
    methods:{
      searchUsers(){
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response=>{
            console.log('chengong')
            this.$bus.$emit('getUsers',response.data.items)
          },
          error=>{
            console.log('sbai',error.message)
          }
        )
      }
    }

}
</script>

