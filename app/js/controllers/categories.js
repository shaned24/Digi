function CategoriesCtrl() {

    // ViewModel
    const vm = this;

    vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    vm.number = 1234;


    vm.categories = [1,2,3,4];
}

export default {
    name: 'CategoriesCtrl',
    fn: CategoriesCtrl
};