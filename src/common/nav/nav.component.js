import NavTemplate from './nav.template.html';

export const NavComponent = {
    bindings: {
        myNavText: '@',
        todo: '<',
        onAddTodo: '&'
    },
    template: NavTemplate,
    controller: class NavComponent {
        constructor(NavService) {
            'ngInject';
            this.NavService = NavService;
        }
        $onInit() {
            this.user = this.NavService.user().get();
            console.log('HELOOO')
        }
        $onChanges(changes) {
            if (changes.todoData) {
                this.todos = Object.assign({}, this.todoData);
            }
        }
        addTodo({
            todo
        }) {
            if (!todo) return;
            this.todos.unshift(todo);
            this.newTodo = {
                title: '',
                selected: false
            };
        }
    }
};
