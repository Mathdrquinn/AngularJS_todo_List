console.log('here');

function MainController($scope) {
  console.log('made it into the controller');
  //to count the number of completed tasks
  $scope.completed = 0;

  $scope.demo = 'Hello';
  console.log($scope.demo);
  $scope.items = [{item: 'Dinner', status: false}, {item:'Maternity Class', status: false}, {item: 'Angular Assignment', status: false}, {item: 'Figure out how to strike through an item', status: false}];
  window.myArr = $scope.items;

  //so completion status is false
  $scope.newItem = {status: false};
  //function to add item to array
  $scope.addItem = function (item) {
    $scope.items.push(item);
    console.log($scope.items);
    console.log($scope.newItem);
  };

  //remove single item from list
  $scope.removeItem = function(items, itemId) {
    console.log('clicked');
    for (var i = 0; i< items.length; i++) {
      console.log('running for loop');
      if (items[i].$$hashKey === itemId) {
        items.splice(i, 1);
      }
      else {console.log('Did not delte ' + $scope.items[i].item)}
    }
    console.log('Here is the list' + $scope.items);
  };

  //function to show editor form
  $scope.editor = "hidden";
    $scope.changeClass = function(){
      if ($scope.editor === "hidden")
        $scope.editor = "blankBlock";
      else
        $scope.editor = "hidden";
    };

  // function to edit item
  $scope.editItem = function(itemList, itemObject, objectName) {
    console.log('editor function is going on below');
    itemObject.item = objectName;
  };

  //change status of item to true
  $scope.checkOffItem = function(items, itemId) {
    console.log('clicked check');
    for (var i = 0; i< items.length; i++) {
      if (items[i].$$hashKey === itemId) {
        items[i].status = true;
        console.log('Checked off ' + $scope.items[i].item)
        console.log('its status is: ' + $scope.items[i].status)
      }
      else {}
    }
    return $scope.items;
  };

  //change status of item to false
  $scope.uncheckItem = function(items, itemId) {
    console.log('clicked uncheck');
    for (var i = 0; i< items.length; i++) {
      if (items[i].$$hashKey === itemId) {
        items[i].status = false;
        console.log('unchecked ' + $scope.items[i].item)
        console.log('its status is: ' + $scope.items[i].status)
      }
      else {}
    }
    return $scope.items;
  };

  //ng-click funtions to calculate the number of completed tasks
  $scope.addCompleted = function() {
    console.log('add to completed');
    $scope.completed = $scope.completed + 1;
  };
  $scope.subtractCompleted = function() {
    console.log('add to completed');
    $scope.completed = $scope.completed - 1;
  };

  //ng-click funciton to delete completed tasks
  $scope.clearCompleted = function () {
    window.tempArr = [];
    angular.forEach($scope.items, function(item) {
      
      var fakeArr = $scope.items

      if(item.status === false) {
        tempArr.push(item);
      }
    });

    $scope.items = tempArr;

    // for (var i = 0; i< items.length; i++) {
    //   console.log('running for loop');
    //   if (items[i].status === true) {
    //     console.log('delete: ' + items[i].name);
    //     $scope.items.splice(i, 1);
    //   }
    //   else {}
    // }
    // console.log('Here is the list' + $scope.items);
  };

}
