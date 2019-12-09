<template>
  <div>
    <input type="checkbox" class="w3-check w3-red" @change="changeHandler" :checked="todo.done">
    <i class="fa fa-user"></i>
    
    <span v-if="todo.done" class="w3-text-purple">
      &nbsp;
      <del>{{todo.text}}</del>
    </span>
    <span v-else>&nbsp;{{todo.text}}</span>
    [
    <span @click="editHandler" class="w3-text-green clickable">edit</span> /
    <span @click="deleteHandler" class="w3-text-red clickable">delete</span>
    ]
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: { todo: Object },
  methods: {
    editHandler() {
      const text = prompt("new text", this.todo.text);
      if (!text) return;
      //const newTodo = Object.assign({}, this.todo, { text: newText });
      const newTodo = { _id: this.todo._id, text };

      this.$emit("update-todo", newTodo);
    },
    changeHandler(ev) {
      const newTodo = Object.assign({}, this.todo, { done: ev.target.checked });
      this.$emit("update-todo", newTodo);
    },
    deleteHandler() {
      this.$emit("delete-todo", this.todo._id);
    }
  } // methods
};
</script>

<style>
.clickable:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
