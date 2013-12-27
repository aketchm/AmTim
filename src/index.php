<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <title>Round Post Line Tagging - American Timber and Steel</title>
        <meta name="description" content="HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. Spend more time developing and less time reinventing the wheel.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/main.css">
        <link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800" rel="stylesheet" type="text/css">

        
        <!--[if lt IE 9]>
            <script src="js/html5.js"></script>
        <![endif]-->
    </head>
    <body>
    <!-- PREVIOUS SCREEN ARROW HIDDEN -->
    <a href="#" id="prev" class="arrow"></a>

        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->      
        <div id="header" class="container row">
            <figure class="five columns add-top">
                <img id="logo" class="responsive" src="img/logo.png" alt="American Timber and Steel">
            </figure>
            <section class="eleven columns">
                <header class="add-top">
                    <h1 id="title" class="blueFont remove-bottom">Round Post Line Tagging</h1>
                    <h2 id="subheader" class="add-top">Select a Diameter</h2>
                </header>
            </section> 
        </div> 
              
        <div class="container row">
            <section id="diameter_content" class="row">            
                <?php
                    for($i=0;$i<6;$i++){
                        echo '<a href="#'.($i+4).'" data-diameter="'.($i+4).'" class="diameter red">';
                        echo '<span class="ab-center">';
                        echo ($i+4).'"';
                        echo '</span>';
                        echo '</a>';
                    }
                ?> 
                               
            </section>
                <!-- HIDDEN LOADING CONTAINER -->
                <aside id="loading" class="ab-center">
                    <i class="fa fa-spinner fa-spin"></i>            
                </aside>  


            <section id="length_content">
                <div class="four columns">
                  <div id="diameterChoice" class="diameter blue">
                    <span id="diameter_result" class="ab-center">
                        
                    </span>
                  </div> 
                </div>
                <div id="lengths" class="ten columns offset-by-two">
                    <a href="#" class="box red row length" data-length="6"><span>6'</span> Syp Turned</a>
                    <a href="#" class="box red row length" data-length="7.6"><span>7.6'</span> Syp Blank</a>
                    <a href="#" class="box red row length" data-length="8"><span>8'</span> Syp Turned</a>
                    <a href="#" class="box red row length" data-length="9"><span>9'</span> Syp Turned</a>
                    <a href="#" class="box red row length" data-length="10"><span>10'</span> Syp Turned</a>
                    <a href="#" class="box red row length" data-length="12"><span>12'</span> Syp Turned</a>
                </div>

                <section id="result" class="twelve columns">
                    <header><h1 class="redFont">Entry Results</h1><h3 class="subheader">Please Confirm All Details Before Printing</h3></header>
                </section>
            </section>
        </div>


        
        <script src="js/jquery.js"></script>
        <script src="js/easing.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
