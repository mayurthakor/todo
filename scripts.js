const todoApp = {
    data() {
        return {
            newTodo: '',
            todos: []
        }
    },
    methods: {
        addTodo() {
            console.log("addTodo");
            if (!this.newTodo.text) {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                })
                localStorage.setItem('todos', JSON.stringify(this.todos));
                this.newTodo = '';
            }
        },
        clearAllToDos() {
            console.log("clearAllToDos");
            localStorage.clear();
            this.todos = [];
        },
        storeToDos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));  
        }
    },
    removeTodo(index) {
        this.todos.splice(index, 1)
    },
    created(){
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    }
}

Vue.createApp(todoApp).mount('#app')