/* Structure Controllers  */
app.controller('NavigationController', function($scope, $http, ROOT, ngProgressFactory, $window) {
	$scope.Root = ROOT;
	$scope.brand = 'ComDoc';
    $scope.isCollapsed = true;
    $scope.progressbar = ngProgressFactory.createInstance();
	$scope.progressbar.setColor('#02bbff');
    $scope.progressbar.start();
    $scope.$on('$routeChangeStart', function(next, current) { 
		$scope.isCollapsed = true;
		$scope.progressbar.start();
	});
  $scope.user = localStorage.user;
  $scope.company = localStorage.company;
	$scope.menu = {
		items: [
			{
			    link: ROOT+"/",
			    name: "Home"
			},
			{
			    link: ROOT+"/about",
			    name: "About"
			},
			{
				name: "Features",
				dropdown: true,
				items: [
				    {
					    link: ROOT+"/features/pricing",
					    name: "Pricing"
					},
					{
					    link: ROOT+"/features/blog",
					    name: "Blog"
					},
					{
					    link: ROOT+"/features/blogpost",
					    name: "Blog Post"
					},
					{
					    link: ROOT+"/features/portfolio",
					    name: "Portfolio"
					},
					{
					    link: ROOT+"/features/portfolioitem",
					    name: "Portfolio Item"
					},
					{
					    link: ROOT+"/features/comingsoon",
					    name: "Coming Soon"
					},
					{
					    link: ROOT+"/features/gallery",
					    name: "Gallery"
					},
					{
					    link: ROOT+"/features/404",
					    name: "404"
					},
					{
					    link: ROOT+"/features/500",
					    name: "500"
					},
				]
			},
			{
				name: "Pages",
				dropdown: true,
				items: [
				    {
					    link: ROOT+"/pages/grid",
					    name: "Grid"
					},
					{
					    link: ROOT+"/pages/typography",
					    name: "Typography"
					},
					{
					    link: ROOT+"/pages/buttons",
					    name: "Buttons"
					},
					{
					    link: ROOT+"/pages/tables",
					    name: "Tables"
					},
					{
					    link: ROOT+"/pages/icons",
					    name: "Icons"
					},
					{
					    link: ROOT+"/pages/forms",
					    name: "Forms"
					},
					{
					    link: ROOT+"/pages/pagination",
					    name: "Pagination"
					},
					{
					    link: ROOT+"/pages/components",
					    name: "Components"
					},
				]
			},
			{
			    link: ROOT+"/contact",
			    name: "Contact"
			},
			{
			    link: ROOT+"/login",
			    name: "Log In",
			    BeforeLogIn: true
			},
			{
			    link: ROOT+"/register",
			    name: "Register",
			    BeforeLogIn: true
			},
			{
					link: ROOT+"/mypage/user",
					name: "My Page",
					needAuth: true,
					userPage: true
			},
			{
					link: ROOT+"/mypage/company",
					name: "My Page",
					needAuth: true,
					companyPage: true
			},
			{
					link: ROOT+"/logout",
					name: "Logout",
					needAuth: true,
					click: function () {
						localStorage.removeItem('user');
						localStorage.removeItem('company');
						$http.get('/logout').then(function onSuccess(sailsResponse){
						window.location = '/';
						});
					}
			}
		]
	}
	$scope.scroll = 0;
	$scope.$on('$routeChangeSuccess', function () {
		$scope.progressbar.complete();
	});
	$scope.top = function() {
		if(document.querySelector(".main")) return document.querySelector(".main").getBoundingClientRect().top;
	};
});
app.controller('FooterController', function($scope, ROOT) {
	$scope.brand = 'ComDoc';
});

app.controller('HomeController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		slider: [
			{
				heading: "믿을 수 있는 컴퓨터수리, ComDoc",
				description: "내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오.",
				image: ROOT+"/assets/img/parallax_slider/2.png"
			},
			{
				heading: "합리적인 컴퓨터수리, ComDoc",
				description: "내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오.",
				image: ROOT+"/assets/img/parallax_slider/3.png"
			},
			{
				heading: "쉽고 빠른 컴퓨터수리, ComDoc",
				description: "내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오. 내용을 입력하시오.",
				image: ROOT+"/assets/img/parallax_slider/1.png"
			},
		],
		backstretch: [
			ROOT+'/assets/img/big/big-1.jpg', 
			ROOT+'/assets/img/big/big-2.jpg', 
			ROOT+'/assets/img/big/big-4.jpg'
		]
	};
});

app.controller('AboutController', function($scope, ROOT) {
	$scope.top = {
		title: "About",
		backstretch: [
			ROOT+'/assets/img/big/big-1.jpg', 
			ROOT+'/assets/img/big/big-2.jpg', 
			ROOT+'/assets/img/big/big-4.jpg'
		]
	};
	$scope.slider = [
		ROOT+'/assets/img/slider/slider-1.jpg', 
		ROOT+'/assets/img/slider/slider-2.jpg', 
		ROOT+'/assets/img/slider/slider-3.jpg', 
		ROOT+'/assets/img/slider/slider-4.jpg'
	];
});

app.controller('ContactController', function($scope, ROOT) {
	$scope.top = {
		title: "Contact",
		backstretch: [ ROOT+'/assets/img/big/big-5.jpg' ]
	};
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	$scope.options = {scrollwheel: false};
	$scope.marker = {
      id:0,
      coords: {
        latitude: 45,
        longitude: -73
      }
     };
});

app.controller('LoginController', function($scope, $http, toastr, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		login: true,
		backstretch: [ ROOT+'/assets/img/big/big-1.jpg' ]
	};
	$scope.loginForm = {
		type: 'user'
	};

	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    if ($scope.loginForm.type == "user") {
    	// Submit request to Sails.
	    $http.post('/login/user', {
	      email: $scope.loginForm.email,
	      password: $scope.loginForm.password
	    })
	    .then(function onSuccess (res){
	    	localStorage.user = JSON.stringify(res.data);  // 불러올때: JSON.parse(localStorage).user

	      // Refresh the page now that we've been logged in.
	      window.location = '/';  
	    })
	    .catch(function onError(sailsResponse) {

	      // Handle known error type(s).
	      // Invalid username / password combination.
	      if (sailsResponse.status === 400 || 404) {
	        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
	        //
	        toastr.error('Invalid email/password combination.', 'Error', {
	          closeButton: true
	        });
	        return;
	      }

	        toastr.error('An unexpected error occurred, please try again.', 'Error', {
	          closeButton: true
	        });
	        return;

	    })
	    .finally(function eitherWay(){
	      $scope.loginForm.loading = false;
	    });
    }

    else {
    	// Submit request to Sails.
	    $http.post('/login/company', {
	      email: $scope.loginForm.email,
	      password: $scope.loginForm.password
	    })
	    .then(function onSuccess (res){
	    	localStorage.company = JSON.stringify(res.data);  // 불러올때: JSON.parse(localStorage).company

	      // Refresh the page now that we've been logged in.
	      window.location = '/';
	    })
	    .catch(function onError(sailsResponse) {

	      // Handle known error type(s).
	      // Invalid username / password combination.
	      if (sailsResponse.status === 400 || 404) {
	        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
	        //
	        toastr.error('Invalid email/password combination.', 'Error', {
	          closeButton: true
	        });
	        return;
	      }

	        toastr.error('An unexpected error occurred, please try again.', 'Error', {
	          closeButton: true
	        });
	        return;

	    })
	    .finally(function eitherWay(){
	      $scope.loginForm.loading = false;
	    });
    }
  };
});

app.controller('LogoutController', function($scope) {

	$scope.logout = function () {
		localStorage.removeItem('user');
		localStorage.removeItem('company');
		$http.get('/logout').then(function onSuccess(sailsResponse){
		window.location = '/';
		})
	};

});

app.controller('RegisterController', function($scope, $http, toastr, ROOT) {
	$scope.top = {
		register: true,
		backstretch: [ ROOT+'/assets/img/big/big-1.jpg' ]
	};
	// set-up loading state
  $scope.registerForm = {
    loading: false
  }

  $scope.submitRegisterForm = function(){

    // Set the loading state (i.e. show loading spinner)
    $scope.registerForm.loading = true;

    if($scope.registerForm.username) {
    	$http.post('/register/user', {
    		username: $scope.registerForm.username,
	      email: $scope.registerForm.email,
	      phone_number: $scope.registerForm.phone_number,
	      location: $scope.registerForm.location,
	      password: $scope.registerForm.password
    	})
    	.then(function onSuccess(res){
    		localStorage.user = JSON.stringify(res.data);  // 불러올때: JSON.parse(localStorage).user
      	
      	window.location = '/';
	    })
	    .catch(function onError(sailsResponse){

		    // Handle known error type(s).
		    // If using sails-disk adpater -- Handle Duplicate Key
		    var emailAddressAlreadyInUse = sailsResponse.status == 409;

		    if (emailAddressAlreadyInUse) {
		      toastr.error('That email address has already been taken, please try again.', 'Error');
		      return;
		    }
		    else if (sailsResponse.status === 400 || 404 || 403) {
		    	toastr.error('Something wrong, try again.',sailsResponse.status);

					return;
		    }

	    })
	    .finally(function eitherWay(){
	      $scope.registerForm.loading = false;
	    })
    }

    else if ($scope.registerForm.companyname) {
    	$http.post('/register/company', {
    		email: $scope.registerForm.email,
    		password: $scope.registerForm.password,
    		companyname: $scope.registerForm.companyname,
    		location: $scope.registerForm.location,
    		address: $scope.registerForm.address,
    		adminname: $scope.registerForm.adminname,
    		phone_number: $scope.registerForm.phone_number,
    		description: $scope.registerForm.description
    	})
    	.then(function onSuccess(res){
    		localStorage.company = JSON.stringify(res.data);  // 불러올때: JSON.parse(localStorage).company
      
      	window.location = '/';
	    })
	    .catch(function onError(sailsResponse){

		    // Handle known error type(s).
		    // If using sails-disk adpater -- Handle Duplicate Key
		    var emailAddressAlreadyInUse = sailsResponse.status == 409;

		    if (emailAddressAlreadyInUse) {
		      toastr.error('That email address has already been taken, please try again.', 'Error');
		      return;
		    }
		    else if (sailsResponse.status === 400 || 404 || 403) {
		    	toastr.error('Somthing wrong, try again.',sailsResponse.status);

					return;
		    }

	    })
	    .finally(function eitherWay(){
	      $scope.registerForm.loading = false;
	    })
    }
  }
});


/* Features */
app.controller('PricingController', function($scope, ROOT) {
	$scope.top = {
		title: "Pricing",
		pricing: [
			{
				width: "col-xs-12 col-sm-4 col-md-4 col-lg-4",
				title: "Basic",
				list: [
					"Lorem ipsum",
                    "dolor sit",
                    "sit amet",
                    "Fusce nec"
				],
				price: "$29.99 / month",
				button: "Select plan"
			},
			{
				width: "col-xs-12 col-sm-4 col-md-4 col-lg-4",
				title: "Advance",
				list: [
					"Lorem ipsum",
					"sit amet",
			        "dolor sit",
                    "sit amet",
                    "Fusce nec"
				],
				price: "$69.99 / month",
				button: "Select plan"
			},
			{
				width: "col-xs-12 col-sm-4 col-md-4 col-lg-4",
				title: "Pro",
				list: [
					"Lorem ipsum",
					"sit amet",
                    "dolor sit",
                    "sit amet",
                    "Fusce nec",
                    "Fusce nec"
				],
				price: "$99.99 / month",
				button: "Select plan"
			}
		],
		backstretch: [ ROOT+'/assets/img/big/big-1.jpg' ]
	};
});
app.controller('BlogController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		title: "Blog",
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});
app.controller('BlogPostController', function($scope, ROOT, $modal) {
	$scope.top = {
		title: "Blog",
		author: "James Don",
		date: "05/02/13",
		backstretch: [ ROOT+'/assets/img/big/big-4.jpg' ]
	};
	$scope.images = [
		ROOT+'/assets/img/filler/1.jpg',
		ROOT+'/assets/img/filler/2.jpg',
		ROOT+'/assets/img/filler/3.jpg',
		ROOT+'/assets/img/filler/4.jpg',
		ROOT+'/assets/img/filler/5.jpg',
		ROOT+'/assets/img/filler/6.jpg',
		ROOT+'/assets/img/filler/7.jpg',
		ROOT+'/assets/img/filler/8.jpg',
		ROOT+'/assets/img/filler/9.jpg',
		ROOT+'/assets/img/filler/10.jpg'
	];
	$scope.popup = function(image) {
		var modalInstance = $modal.open({
			templateUrl: 'popup.html',
			controller: 'ImagePopup',
			size: 'lg',
			resolve: {
				image: function () {
				  return image;
				}
			}
		});
	};
});
app.controller('PortfolioController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		title: "Portfolio",
		backstretch: [ ROOT+'/assets/img/big/big-1.jpg' ]
	};
});
app.controller('PortfolioItemController', function($scope, ROOT, $modal) {
	$scope.top = {
		title: "Project #1",
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-4.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
	$scope.images = [
		ROOT+'/assets/img/filler/10.jpg',
		ROOT+'/assets/img/filler/12.jpg',
		ROOT+'/assets/img/filler/13.jpg',
		ROOT+'/assets/img/filler/14.jpg'
	];
	$scope.popup = function(image) {
		var modalInstance = $modal.open({
			templateUrl: 'popup.html',
			controller: 'ImagePopup',
			size: 'lg',
			resolve: {
				image: function () {
				  return image;
				}
			}
		});
	};
});
app.controller('ComingSoonController', function($scope, ROOT) {
	$scope.top = {
		title: "Coming Soon",
		counter: true,
		backstretch: [ ROOT+'/assets/img/big/big-5.jpg' ]
	};
});
app.controller('GalleryController', function($scope, ROOT, $modal) {
	$scope.top = {
		title: "Gallery",
		backstretch: [
			ROOT+'/assets/img/big/big-4.jpg', 
			ROOT+'/assets/img/big/big-5.jpg', 
			ROOT+'/assets/img/big/big-3.jpg'
		]
	};
	$scope.images = [
		ROOT+'/assets/img/filler/1.jpg',
		ROOT+'/assets/img/filler/2.jpg',
		ROOT+'/assets/img/filler/3.jpg',
		ROOT+'/assets/img/filler/4.jpg',
		ROOT+'/assets/img/filler/5.jpg',
		ROOT+'/assets/img/filler/6.jpg',
		ROOT+'/assets/img/filler/7.jpg',
		ROOT+'/assets/img/filler/8.jpg',
		ROOT+'/assets/img/filler/9.jpg',
		ROOT+'/assets/img/filler/10.jpg',
		ROOT+'/assets/img/filler/11.jpg',
		ROOT+'/assets/img/filler/12.jpg',
		ROOT+'/assets/img/filler/13.jpg',
		ROOT+'/assets/img/filler/14.jpg',
		ROOT+'/assets/img/filler/15.jpg',
		ROOT+'/assets/img/filler/16.jpg',
		ROOT+'/assets/img/filler/17.jpg'
	];
	$scope.popup = function(image) {
		var modalInstance = $modal.open({
			templateUrl: 'popup.html',
			controller: 'ImagePopup',
			size: 'lg',
			resolve: {
				image: function () {
				  return image;
				}
			}
		});
	};
});
app.controller('404Controller', function($scope, ROOT) {
	$scope.top = {
		error: {
			number: "404",
			sub: "You're lost bro",
			description: "Either this page has gone or the url is wrong.<br><br>Kinda rhymes....anyway try the search bar below.",
			search: true
		},
		backstretch: [
			ROOT+'/assets/img/big/big-1.jpg', 
			ROOT+'/assets/img/big/big-2.jpg', 
			ROOT+'/assets/img/big/big-4.jpg'
		]
	}
});
app.controller('500Controller', function($scope, ROOT) {
	$scope.top = {
		error: {
			number: "500",
			sub: "Oops, there was an error",
			description: "But don't worry, we will fix it soon.",
			search: false
		},
		backstretch: [
			ROOT+'/assets/img/big/big-1.jpg', 
			ROOT+'/assets/img/big/big-2.jpg', 
			ROOT+'/assets/img/big/big-4.jpg'
		]
	}
});

app.controller('ImagePopup', function ($scope, $modalInstance, image) {
  $scope.image = image;
});


/* Pages */
app.controller('GridController', function($scope) {
	// Stuff goes here!!!
});
app.controller('TypographyController', function($scope) {
	// Stuff goes here!!!
});
app.controller('ButtonsController', function($scope) {
	// Stuff goes here!!!
});
app.controller('TablesController', function($scope) {
	// Stuff goes here!!!
});
app.controller('IconsController', function($scope) {
	// Stuff goes here!!!
});
app.controller('FormsController', function($scope) {
	// Stuff goes here!!!
});
app.controller('PaginationController', function($scope) {
	// Stuff goes here!!!
});
app.controller('ComponentsController', function($scope) {
	// Stuff goes here!!!
});

app.controller('MypageUserController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});

app.controller('MypageCompanyController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});

app.controller('MypageUserSheetController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};

	$scope.userSheetForm = {
		loading: false
	};

	$scope.submitUserSheetForm = function() {

	}
});

app.controller('MypageCompanyRequestSheetController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});

app.controller('MypageUserSheetDetailController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};

	$scope.submitSheetForm = function(){

    // Set the loading state (i.e. show loading spinner)
    $scope.sheetForm.loading = true;

    if($scope.sheetForm.username) {
    	$http.post('/insert/sheet', {
    	  location: $scope.sheetForm.location,
	      address: $scope.sheetForm.address,
	      requester_phone: $scope.sheetForm.requester_phone,
	      computer_type: $scope.sheetForm.computer_type,
	      brand: $scope.sheetForm.brand,
	      used_year: $scope.sheetForm.used_year,
	      trouble_type: $scope.sheetForm.trouble_type,
	      trouble_detail: $scope.sheetForm.trouble_detail,
	      available_time: $scope.sheetForm.available_time,
    	})
    	.then(function onSuccess(sailsResponse){
      window.location = '/';
	    })
	    .catch(function onError(sailsResponse){

	    })
	    .finally(function eitherWay(){
	      $scope.sheetForm.loading = false;
	    })
    	}
	}
});

app.controller('MypageCompanySheetDetailController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});

app.controller('MypageCompanyRequestSheetDetailController', function($scope, ROOT) {
	$scope.Root = ROOT;
	$scope.top = {
		backstretch: [ 
			ROOT+'/assets/img/big/big-3.jpg',
			ROOT+'/assets/img/big/big-5.jpg'
		]
	};
});