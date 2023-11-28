<template>
    <div class="todos">
        <h2>Todo List</h2>
        <form @submit.prevent="addTodo">
            <input v-model="newTodo" placeholder="Add a new todo">
            <button type="submit" class="add-button">Add</button>
        </form>
        <ul class="todo-list">
            <li v-for="todo in filteredTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done" class="done">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button @click="removeTodo(todo)" class="remove-button">X</button>
            </li>
        </ul>
    </div>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted? 'Show all': 'Hide completed' }}
    </button>
</template>

<script>
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            hideCompleted: false,
            todos: [
                { id: id++, text: 'Learn GameDev', done: true },
                { id: id++, text: 'Learn Vue', done: false }
            ]
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter((t) => (this.hideCompleted) ? t.done != this.hideCompleted : this.todos
            )
        }
    },
    methods: {
        addTodo() {
            this.todos.push({
                id: id++,
                text: this.newTodo,
                done: false
            })
            this.newTodo = ''
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        }
    }
}
</script>

<style>
.todos {
    margin-top: 4rem;
}
.todos .done {
    text-decoration: line-through;
}

.todos .todo-list {
    margin: 1.5rem 0 1.5rem 0;
}

.todos .done {
    margin-right: 0.5rem;
}

.todos .remove-button {
    margin-left: 0.5rem;
}

.todos .add-button {
    margin-left: 0.5rem;
}
</style>