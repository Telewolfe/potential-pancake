export class NavService {
    constructor($resource) {
        'ngInject';
        this.$resource = $resource;
    }
    user() {
        return this.$resource('http://localhost:3333/user');
    }
}
