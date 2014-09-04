/**
 * Created by Developer on 8/28/2014.
 */

(function(){

    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function($http){
       var store = this;
        store.products = [];

        $http.get('/Flatlanders Gem Stroe/products.json').success(function(data){
            store.products = data;
        }).error(function(){
            window.alert('There was an error getting the data from "products.json".')
        });

        this.addToCart = function(product){
            window.alert('Product: ' + product.name +
                         '\nPrice: ' + product.price +
                         '\nAdded to cart.')
        };
    }]);

    app.controller('PanelController', function(){
        this.tab = 1;

        this.setTab = function(selectTab){
            if(selectTab === null){
                selectTab = 1;
            }
            this.tab = selectTab;
        };

        this.isSelected = function(selectTab){
            return this.tab === selectTab;
        };
    });

})();

