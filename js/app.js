/* setup your angular app here */

//debug stuff to show the app is loading and fruit / veggies are available

var fruitveggieApp = angular.module('fruitveggieApp',[]);

fruitveggieApp.run(function(){
    console.log('App Started');
    console.log('Fruit count', fruit.length);
    console.log('Veggie count', vegetables.length);
})

function randOrd(){
  return (Math.round(Math.random())-0.5);
}

fruitveggieApp.controller('FVlist', ['$scope', function($scope){
    var fruitveg = fruit.concat(vegetables).sort(randOrd)
    $scope.items = fruitveg;
    $scope.fruits = [];
    $scope.veggies = [];

    $scope.moveLeft = function(index){
        $scope.fruits.push($scope.items[index]);
        $scope.items.splice(index, 1);
    }

    $scope.moveRight = function(index){
        $scope.veggies.push($scope.items[index]);
        $scope.items.splice(index, 1);
    }

    $scope.returnLeft = function(index){
        $scope.items.push($scope.veggies[index]);
        $scope.veggies.splice(index, 1);
    }

    $scope.returnRight = function(index){
        $scope.items.push($scope.fruits[index]);
        $scope.fruits.splice(index, 1);
    }

    $scope.checkFruit = function(item){
        var array1 = fruit.sort()
        var array2 = $scope.fruits.sort()
        var test = "est"

        if (fruit.indexOf(item) != -1 && fruitveg.length == 1){
            return true
        }

        var is_same = array1.length == array2.length && array1.every(function(element, index) {
            return element === array2[index];
        });
        if(is_same== true && fruitveg.length < 1){
            alert("You won!")
        }
    }

    $scope.checkVeg = function(item){
        // console.log(item)
        console.log(fruitveg.length)
        // console.log(fruit.indexOf(item))
        if (vegetables.indexOf(item) != -1 && fruitveg.length == 0){
            return true
        }
        var is_same = array1.length == array2.length && array1.every(function(element, index) {
            return element === array2[index];
        });
        if(is_same== true && fruitveg.length < 1){
            alert("You won!")
        }
    }

}])


