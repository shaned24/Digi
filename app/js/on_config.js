function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'ExampleCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    })

    .state('Categories', {
      url: '/categories',
      controller: 'CategoriesCtrl as categories',
      templateUrl: 'categories.html',
      title: 'Categories'
    })

    .state('SubCategories', {
      url: '/sub-categories',
      controller: 'SubCategoriesCtrl as sub-categories',
      templateUrl: 'sub-categories.html',
      title: 'SubCategories'
    });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
