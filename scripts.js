const todoApp = {
    data() {
        return {
            newTodo: '',
            todos: []
        }
    },
    methods: {
        addTodo() {
            if (!this.newTodo.text) {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                })
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    }
}

Vue.createApp(todoApp).mount('#app')