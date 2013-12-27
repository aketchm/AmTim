$('.diameter').click(function(){
    var diameter = this.getAttribute('data-diameter');
    $('#diameter_result').html(diameter+ '"');
    $('#diameter_result').data('diameter', diameter);
    $('#diameter_content').addClass('faded');  
    showLoading();  
    setTimeout(hideDiameter(),700);  
    setTimeout(showResult(),1000);
    localStorage['step'] = 'diameter';
});

$('#prev').click(function() {
    if(localStorage['step'] == 'diameter'){
        hideLength();
        showLoading();
        setTimeout(showDiameter(),1000);
        hideLoading();
        $('#length_content').removeClass('faded');
        localStorage['step']='';
    }
    else if(localStorage['step'] == 'length'){
        showLoading();
        $('#result').fadeOut(500,'easeInOutExpo');
        $('#result').html('')
        showLength();
        setTimeout(showLengthSelect(),500);
        hideLoading();
        localStorage['step'] = 'diameter';
        $('#subheader').html('Select a Diameter');
    }
    else{
        location.reload();
        $.removeCookie('description');
        $.removeCookie('qty');
        $.removeCookie('tags');
        $.removeCookie('shift');
        $.removeCookie('comments');
    }
});
$('.length').click(function(){
    hideLengthSelect();           
    showLoading();    
    var diameter = $('#diameter_result').data('diameter');
    var length = this.getAttribute('data-length'); 
    $('#result').html('<header><h1 class="redFont">Entry Results</h1><h3 class="subheader">Please Confirm All Details Before Printing</h3></header><p class="lead">You have chosen a <strong class="blueFont">'+diameter+'&quot; diameter</strong> round post that is <strong class="blueFont">'+length+' &rsquo; long</strong>. </p><p><a id="print" href="javascript:window.print()" class="blue add-top"><i class="fa fa-print"></i> Print</a></p>');    
    hideLoading();
    localStorage['step'] = 'length'; 
    $('#result').fadeIn(500,'easeInOutExpo');  
    $('#subheader').html('Print');       
})

    function showLoading(){
        $('#loading').fadeIn(500);
    }
    function hideLoading(){
        $('#loading').fadeOut(500);
    }  
    function hideLength(){
        $('#length_content').addClass('faded');
        $('#length_content').fadeOut(500, 'easeInOutExpo');
    }
    function showLength(){
        $('#length_content').removeClass('faded');
        $('#length_content').fadeIn(500, 'easeInOutExpo');
    }    
    function showDiameter(){
        $('#diameter_content').fadeIn(500, function() {
            $('#diameter_content').removeClass('faded'); 
            $('#prev').hide();           
        });
    }
    function hideDiameter(){
        $('#diameter_content').slideUp(500, 'easeInOutExpo');
    }

    function showResult(){
        hideLoading();  
        $('#subheader').html('Select a Length');
        $('#length_content').fadeIn(500, 'easeInOutExpo').css('display', 'inline');
        $('#prev').fadeIn(500, 'easeInOutExpo');
    }

    function hideLengthSelect(){
        $('#lengths').hide();
    }

    function showLengthSelect(){
        $('#lengths').fadeIn(500, 'easeInOutExpo');
    }    


    //JS for LUMBER TAGGING

$('.trigger').click(function() {
    $('.trigger').removeClass('blue');
    $(this).addClass('blue');
});

$('#submit').click(function() {
    $('#lumber-tagging').submit();
    $('#pendu-tagging').submit();
    return false;
});

$('#lumber-tagging').submit(function() {
    return false;
    $(this).slideUp(500, 'easeInOutExpo');
    $('#results').fadeIn(500, 'easeInOutExpo');    
});

$('#lumber-tagging').submit(function() {
    var description = $('#product_description').val();
    var qty = $('#qty').val();
    var tags = $('#tags').val();
    var order_num = $('#order_num').val();
    var shift = $('input[name=shift]:checked', '#lumber-tagging').val();
    if(!shift) shift ='1st';
    var comments = $('#comments').val();

    $.cookie('description' , description);
    $.cookie('qty' , qty);
    $.cookie('tags' , tags);
    $.cookie('order_num' , order_num);
    $.cookie('shift' , shift);
    $.cookie('comments' , comments);

  
    $('#lumber-tagging').hide(500);
    $('#product-description-results').append($.cookie('description'));
    $('#qty-results').append($.cookie('qty'));
    $('#tags-results').append($.cookie('tags'));
    $('#shift-results').append($.cookie('shift'));
    $('#comment-results').append($.cookie('comments'));
    $('#results').show(500);
    $('#prev').show(500);
});

//JS FOR PENDU TAGGING


$('#pendu-tagging').submit(function() {
    return false;
    $(this).slideUp(500, 'easeInOutExpo');
    $('#results').fadeIn(500, 'easeInOutExpo');
});

$('#pendu-tagging').submit(function(){  
    var description = $('#product_description').val();
    var qty = $('#qty').val();
    var tags = $('#tags').val();
    var order_num = $('#order_num').val();
    var shift = $('input[name=shift]:checked', '#lumber-tagging').val();
    var comments = $('#comments').val();

    $.cookie('description' , description);
    $.cookie('qty' , qty);
    $.cookie('tags' , tags);
    $.cookie('order_num' , order_num);
    $.cookie('shift' , shift);
    $.cookie('comments' , comments);

  
        $('#pendu-tagging').hide(500);
        $('#product-description-results').append($.cookie('description'));
        $('#qty-results').append($.cookie('qty'));
        $('#order_num_results').append(($.cookie('order_num')));
        $('#tags-results').append($.cookie('tags'));
        $('#shift-results').append($.cookie('shift'));
        $('#comment-results').append($.cookie('comments'));
        $('#results').show(500);
        $('#prev').show(500);    
});


$('#lumber-tagging input , #lumber-tagging textarea, #pendu-tagging input, #pendu-tagging textarea').blur(function() {
    $('#loading').show(400, function() {
        $('#loading').hide(1000, 'easeInOutExpo'); 
    });
});


//DOMER js 

$('.post').click(function() {
   localStorage ['fence_type'] = $(this).data('fence-type');
   $('#domer').slideUp(500);

   $('#results div.sixteen').append('<h1 class="remove-bottom">'+ localStorage['fence_type']+ '</h1><img src="img/'+localStorage['fence_type'].toLowerCase()+'.png" width="200">');   
   $('#results').slideDown(500);
});