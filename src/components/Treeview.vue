<template>
  <v-treeview
    :value="getTree"
    :open="open"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    :active.sync="active"
  >
    <template slot="prepend" slot-scope="{ item, open }">
      <v-icon v-if="!item.icon">{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
      <v-icon v-else>{{ icons[item.icon] }}</v-icon>
    </template>
  </v-treeview>
</template>      
<script>
export default {
  props: {
    tree: Array,
    open: Array,
    items: Array,
    icons: Object
  },
  data: () => ({
    active: []
  }),
  computed: {},
  watch: {
    active(newVal) {
      this.$store.commit("home/setCurrentFolder", newVal);
      this.$emit("clicked");
    }
  }
};
</script>
