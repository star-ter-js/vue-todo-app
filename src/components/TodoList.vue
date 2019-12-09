<template>
  <div>
    <input class="w3-check" type="checkbox" v-model="showCompleted">
    show completed!
    <div v-if="todos.length !== 0">
      <TodoItem
        class="w3-panel w3-card w3-padding w3-sand"
        v-for="item in todos"
        v-show="showCompleted || !item.done"
        :todo="item"
        :key="item._id"
        @update-todo="updateTodoHandler"
        @delete-todo="deleteTodoHandler"
      />
    </div>
    <div v-else class="w3-panel">NONE</div>
    <div class="w3-panel">
      YOU HAVE
      <strong>{{todos.filter(el => !el.done).length}}</strong> TODOS
    </div>

    <!--  -->
    <div class="w3-row w3-panel">
      <button class="w3-col w3-btn w3-green" style="width:80px" @click="addTodo(todoText)">Add</button>
      
      <input class="w3-col w3-input" type="text" @keyup="keyupHandler" v-model="todoText">
    </div>

    <div class="w3-row w3-section">
      <button class="w3-section w3-btn w3-red" @click="deleteAll()">delete All</button>
      <button class="w3-btn w3-border w3-sand" @click="deleteDone()">delete done</button>
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      todos: [
        { _id: 2, text: "first todo", done: true },
        { _id: 1, text: "second todo", done: false },
        { _id: 0, text: "third todo", done: true }
      ],
      showCompleted: false,
      todoText: ""
    };
  }, // data
  methods: {
    addTodo(text) {
      if (!text) return console.log("insert valid text");
      //console.log(this.idForNewItem());

      this.todos.unshift({ text, done: false, _id: this.idForNewItem() });
      console.info(`added todo: ${text}`);
      this.todoText = "";
    },
    keyupHandler: function(ev) {
      if (![13, 9].includes(ev.keyCode)) return;
      this.addTodo(this.todoText);
    },
    deleteAll() {
      console.log("delete all");
      this.todos = [];
    },
    deleteLast() {
      this.todos.pop();
    },
    idForNewItem() {
      if (0 === this.todos.length) return 0;
      let ids = this.todos.map(todo => todo._id);
      return Math.max(...ids) + 1;
    },
    deleteDone() {
      this.todos = this.todos.filter(todo => !todo.done);
    }, // deleteDone
    updateTodoHandler(item) {
      if (!item) return;

      const indexItem = this.todos.map(el => el._id).indexOf(item._id);
      Object.assign(this.todos[indexItem], item);
    },
    deleteTodoHandler(id) {
      if ([null, undefined].includes(id)) return;

      this.todos = this.todos.filter(todo => id !== todo._id);
    }
  } // methods
};
</script>


