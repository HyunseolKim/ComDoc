app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/',{
        templateUrl: "app/views/misc/home.tpl.html",
        controller: "HomeController"
    })
    .when('/about',{
        templateUrl: "app/views/misc/about.tpl.html",
        controller: "AboutController"
    })
    .when('/pages/grid',{
        templateUrl: "app/views/pages/grid.tpl.html",
        controller: "GridController"
    })
    .when('/pages/typography',{
        templateUrl: "app/views/pages/typography.tpl.html",
        controller: "TypographyController"
    })
    .when('/pages/buttons',{
        templateUrl: "app/views/pages/buttons.tpl.html",
        controller: "ButtonsController"
    })
    .when('/pages/tables',{
        templateUrl: "app/views/pages/tables.tpl.html",
        controller: "TablesController"
    })
    .when('/pages/icons',{
        templateUrl: "app/views/pages/icons.tpl.html",
        controller: "IconsController"
    })
    .when('/pages/forms',{
        templateUrl: "app/views/pages/forms.tpl.html",
        controller: "FormsController"
    })
    .when('/pages/pagination',{
        templateUrl: "app/views/pages/pagination.tpl.html",
        controller: "PaginationController"
    })
	.when('/pages/components',{
        templateUrl: "app/views/pages/components.tpl.html",
        controller: "ComponentsController"
    })
    .when('/features/pricing',{
        templateUrl: "app/views/features/pricing.tpl.html",
        controller: "PricingController"
    })
    .when('/features/blog',{
        templateUrl: "app/views/features/blog.tpl.html",
        controller: "BlogController"
    })
    .when('/features/blogpost',{
        templateUrl: "app/views/features/blog-post.tpl.html",
        controller: "BlogPostController"
    })
    .when('/features/portfolio',{
        templateUrl: "app/views/features/portfolio.tpl.html",
        controller: "PortfolioController"
    })
    .when('/features/portfolioitem',{
        templateUrl: "app/views/features/portfolio-item.tpl.html",
        controller: "PortfolioItemController"
    })
    .when('/features/comingsoon',{
        templateUrl: "app/views/features/comingsoon.tpl.html",
        controller: "ComingSoonController"
    })
    .when('/features/gallery',{
        templateUrl: "app/views/features/gallery.tpl.html",
        controller: "GalleryController"
    })
	.when('/features/404',{
        templateUrl: "app/views/features/404.tpl.html",
        controller: "404Controller"
    })
    .when('/features/500',{
        templateUrl: "app/views/features/500.tpl.html",
        controller: "500Controller"
    })
    .when('/contact',{
        templateUrl: "app/views/misc/contact.tpl.html",
        controller: "ContactController"
    })
    .when('/login',{
        templateUrl: "app/views/misc/signin.tpl.html",
        controller: "LoginController"
    })
    .when('/signup',{
        templateUrl: "app/views/misc/signup/signup.tpl.html",
        controller: "SignupController"
    })
    .when('/signup/user',{
        templateUrl: "app/views/misc/signup/signup-user.tpl.html",
        controller: "SignupController"
    })
    .when('/signup/company',{
        templateUrl: "app/views/misc/signup/signup-company.tpl.html",
        controller: "SignupController"
    })
    .when('/logout',{
        redirectTo: '/',
        controller: "LogoutController"
    })
    .when('/mypage/user',{
        templateUrl: "app/views/misc/mypage/user/mypage-user.tpl.html",
        controller: "MypageUserController"
    })
    .when('/mypage/company',{
        templateUrl: "app/views/misc/mypage/company/mypage-company.tpl.html",
        controller: "MypageCompanyController"
    })
    .when('/mypage/user/sheet',{
        templateUrl: "app/views/misc/mypage/user/mypage-user-sheet.tpl.html",
        controller: "MypageUserSheetController"
    })
    .when('/mypage/company/request_sheet',{
        templateUrl: "app/views/misc/mypage/company/mypage-company-requestSheet.tpl.html",
        controller: "MypageCompanyRequestSheetController"
    })
    .when('/mypage/user/sheet/detail',{
        templateUrl: "app/views/misc/mypage/user/mypage-user-sheet-detail.tpl.html",
        controller: "MypageUserSheetDetailController"
    })
    .when('/mypage/company/sheet/detail',{
        templateUrl: "app/views/misc/mypage/company/mypage-company-sheet-detail.tpl.html",
        controller: "MypageCompanySheetDetailController"
    })
    .when('/mypage/company/request_sheet/detail',{
        templateUrl: "app/views/misc/mypage/company/mypage-company-requestSheet-detail.tpl.html",
        controller: "MypageCompanyRequestSheetDetailController"
    })
    .otherwise({redirectTo:'/'});
	
    $locationProvider.html5Mode(true);
});