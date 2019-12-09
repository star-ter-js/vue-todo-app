<template>
  <div class="w3-container w3-card-4 w3-round w3-margin">
    <TodoList/>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList,
    TodoItem
  }
};
</script>

