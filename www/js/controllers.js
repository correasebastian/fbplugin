angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaFacebook) {

    $scope.login = function() {

        // carefull con esto, me estaba produciendo un error por poner un permiso inexistente
        $cordovaFacebook.login(["public_profile", "email"])
            .then(function(success) {
                console.log('success', success);
                var accessToken = success.authResponse.accessToken;
                var userID = success.authResponse.userID;
                var expiresIn = success.authResponse.expiresIn;

                console.log("Login Success" + JSON.stringify(success));

                // STEP - 2 CONVERTING DATE FORMAT
                var expDate = new Date(new Date().getTime() + expiresIn * 1000).toISOString();

                console.log(expDate);
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }

    $scope.me = function() {
        $cordovaFacebook.api("me?fields=email,name,picture", ["public_profile", "email"])
            .then(function(success) {
                console.log('public profile', success)
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }

    $scope.dialog = function() {
        var options = {
            method: "feed",
            link: "http://example.com",
            caption: "Such caption, very feed."
        };
        $cordovaFacebook.showDialog(options)
            .then(function(success) {
                console.log('showDialog', success)
            })
            .catch(function(error) {
                console.log('error', error)
            })

    }


    $scope.logout = function() {
        $cordovaFacebook.logout()
            .then(function(success) {
                console.info('logout', success)
            }, function(error) {
                console.error(error)
            });
    }

    $scope.status = function() {
        $cordovaFacebook.getLoginStatus().then(function(success) {
                console.log(success)
            })
            .catch(function(error) {
                console.log('error', error)
            })
    }

})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
