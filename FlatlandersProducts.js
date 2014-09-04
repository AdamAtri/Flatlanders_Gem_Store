/**
 * Created by Developer on 9/2/2014.
 */
(function(){
    var app = angular.module('store-products', []);

    app.directive('productTitle', function(){
        return{
            restrict: 'A',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('newReviewForm', function(){
        return {
            restrict:'E',
            templateUrl: 'new-review-form.html',
            controller: function(){
                this.review = {};

                this.addReview = function(product){
                    product.reviews.push(this.review);
                    this.review = {};

                };
            },
            controllerAs: 'reviewCtrl'
        };
    });

    app.directive('productDescription', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });
})();