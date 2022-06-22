<template>  
    <div class="container">
        <h1>Test</h1>
       <SearchItem />
       <ListItem />
    </div> 
</template>

<script>
import SearchItem from './components/SearchItem.vue';
import ListItem from './components/ListItem'


export default {
    name: "App",
    components: { SearchItem, ListItem }
}
</script>


