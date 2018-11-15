<template> 
 <v-treeview
      v-model="tree"
      :open="open"
      :items="items"
      activatable
      item-key="name"
      open-on-click>
      
      <template slot="prepend" slot-scope="{ item, open, leaf }">
        <v-icon v-if="!item.icon">
          {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ icons[item.icon] }}
        </v-icon>
      </template>
      
 </v-treeview>
</template>      
<script>
export default {
  props: {
    tree,
    open,
    items,
    icons
  },
  components: {
  
  },
  data() {
    return {
      
    };
  }
};
</script>
