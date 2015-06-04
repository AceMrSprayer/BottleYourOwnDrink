'use strict';

(function() {
  // Articles Controller Spec
  describe('MEAN controllers', function() {
    describe('BYODControllerStep1', function() {

      beforeEach(function() {
        module('mean');
        module('mean.system');
        module('mean.BYOD');
      });

      // Initialize the controller and a mock scope
      var ArticlesController,
        scope,
        $httpBackend,
        $stateParams,
        $location;

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service but then attach it to a variable
      // with the same name as the service.
      beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

        scope = $rootScope.$new();

        ArticlesController = $controller('ArticlesController', {
          $scope: scope
        });

        $stateParams = _$stateParams_;

        $httpBackend = _$httpBackend_;

        $location = _$location_;

      }));

      it('$scope.find() should create an array with at least one article object ' +
        'fetched from XHR', function() {

          // test expected GET request
          $httpBackend.expectGET('articles').respond([{
            title: 'An Article about MEAN',
            content: 'MEAN rocks!'
          }]);

          // run controller
          scope.find();
          $httpBackend.flush();

          // test scope value
          expect(scope.articles).toEqualData([{
            title: 'An Article about MEAN',
            content: 'MEAN rocks!'
          }]);

        });

      it('$scope.findOne() should create an array with one article object fetched ' +
        'from XHR using a articleId URL parameter', function() {
          // fixture URL parament
          $stateParams.articleId = '525a8422f6d0f87f0e407a33';

          // fixture response object
          var testArticleData = function() {
            return {
              title: 'An Article about MEAN',
              content: 'MEAN rocks!'
            };
          };

          // test expected GET request with response object
          $httpBackend.expectGET(/articles\/([0-9a-fA-F]{24})$/).respond(testArticleData());

          // run controller
          scope.findOne();
          $httpBackend.flush();

          // test scope value
          expect(scope.article).toEqualData(testArticleData());

        });
    });
  });
}());
