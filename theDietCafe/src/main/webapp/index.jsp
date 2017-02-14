<!-- <html>
<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link href="static/CSS/app/app.css" rel="stylesheet"></link>

<link href="static/CSS/lib/bootstrap-min.css" rel="stylesheet"></link>



</head>
<body>


<body >

	<div ng-app="mainApp">
	<div class="container">
		<div class="top-navbar header b-b">
			<a href="#home" class="navbar-brand "> TheDietCafe.com </a>
			<button class=" navbar navbar-toggle" data-toggle="collapse"
				data-target=".navheadercollapse">
				<span class=" icon-bar"></span> <span class=" icon-bar"></span> <span
					class=" icon-bar"></span>
			</button>
			
			<div >
		
				<ul class=" nav navbar-nav">
					<li><a ui-sref="home">Home</a></li>
					<li><a ui-sref="aboutUs">About us</a></li>
					<li><a ui-sref="plans">Plans</a></li>
					
					<li><a ui-sref="whyUs">Why us</a></li>
					<li><a ui-sref="fAQ">FAQ</a></li>
					<li><a ui-sref="contactUs">Contact us</a></li>
				</ul>
				<ul ng-if="name==null" class="nav navbar-nav navbar-right">
				
					<li><a ui-sref="signUp"> Signup</a></li>
					<li><a ui-sref="loginPage">Log In </a></li>
				</ul>
				<ul ng-if="name!=null" class="nav navbar-nav navbar-right">
				
					<li><a > {{name}}</a></li> 
					<li><a ui-sref="logout">logout </a></li>
				</ul>
			</div>
		</div>
		</div>

    <div ui-view style="margin-top:10%"></div>


		




		<div class="bottom-nav footer">
			<button class=" navbar navbar-toggle" data-toggle="collapse"
				data-target=".navfootercollapse">
				<span class=" icon-bar"></span> <span class=" icon-bar"></span> <span
					class=" icon-bar"></span>
			</button>
			<div class=" collapse navbar-collapse navfootercollapse">
				<ul class=" nav navbar-nav">
					<li><a href="#">Terms and conditions</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Renewable Policy</a></li>
					<li><a href="#">Task Holidays</a></li>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Contact us</a></li>
				</ul>
			</div>
		</div>
		 	
	</div>




	
	<script src="static/JS/lib/angular-ui-router.min.js" /></script>
	<script src="static/JS/lib/angular.min.js" /></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
	<script src="static/JS/app/controller/home-controller.js" /></script>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.0/angular-ui-router.min.js"></script>
	
	
	<script
		src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		
		 <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.13.0.js"></script>
		 
		  
	<script src="static/js/controller/logout_controller.js"></script>
	
<script src="static/JS/app.js"></script> 	
<script src="static/JS/app/controller/aboutUs_controller.js" /></script>
<script src="static/JS/lib/angular-min.js" ></script> 
<script src="static/JS/lib/angular-ui-router.js" ></script> 
<script src="static/JS/lib/bootstrap.min.js" ></script> 
<script src="static/JS/lib/jquery.min.js" ></script> 
</body>
</body>
</html>
 -->
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<!DOCTYPE html>
<html ng-app="mainApp">
    <head>

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="static/CSS/app/app.css" rel="stylesheet"></link>
<link href="static/CSS/lib/bootstrap-min.css" rel="stylesheet"></link>
        
    </head>
<body>

<div >
	<div class="container headerWidth">
		<div class="top-navbar header b-b">
			<a href="#home" class="navbar-brand"> TheDietCafe.com </a>
			<button class=" navbar navbar-toggle" data-toggle="collapse"
				data-target=".navheadercollapse">
				<span class=" icon-bar"></span> <span class=" icon-bar"></span> <span
					class=" icon-bar"></span>
			</button>
			
			<div >
		
				<ul class=" nav navbar-nav">
					<li><a ui-sref="home">Home</a></li>
					<li><a ui-sref="aboutUs">About us</a></li>
					<li><a ui-sref="plans">Plans</a></li>
					
					<li><a ui-sref="whyUs">Why us</a></li>
					<li><a ui-sref="fAQ">FAQ</a></li>
					<li><a ui-sref="contactUs">Contact us</a></li>
				</ul>
				<ul  class="nav navbar-nav navbar-right">
				
					<li><a ui-sref="signUp"> Signup</a></li>
					<li><a ui-sref="loginPage">Log In </a></li>
				</ul>
				<!-- <ul ng-if="name!=null" class="nav navbar-nav navbar-right">
				
					<li><a > {{name}}</a></li> 
					<li><a ui-sref="logout">logout </a></li>
				</ul> -->
			</div>
		</div>
		</div>

    <div ui-view style="margin-top:50%">
    </div>


</div>
 <script src="static/JS/lib/angular-min.js" ></script> 
<script src="static/JS/lib/jquery.min.js" ></script> 
<script src="static/JS/lib/angular-ui-router.js" ></script> 
<script src="static/JS/lib/bootstrap.min.js" ></script> 
<script src="static/JS/app.js"></script> 	
<script src="static/JS/app/controller/aboutUs_controller.js" /></script>
<script src="static/JS/app/controller/home-controller.js" /></script>

     



      
    </body>
    </html>