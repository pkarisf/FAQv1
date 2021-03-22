
var accordWithPage =  function() {
  
    var faqDiv = $('#faq-links div');
   $(function () {
     
     var expand = 'expanded';
     var content = $('.faq-content');
           //FAQ Accordion
           $('.faq-accordion > li > a').click(function (e) {
                   e.preventDefault();
           if ($(this).hasClass(expand)) {
               $(this).removeClass(expand);
   //          $('.faq-accordion > li > a > div').not(this).css('opacity', '1');//returns li back to normal state
               $(this).parent().children('ul').stop(true, true).slideUp();
           } else {
   //            $('.faq-accordion > li > a > div').not(this).css('opacity', '0.5');//dims inactive li
               $('.faq-accordion > li > a.expanded').removeClass(expand);
               $(this).addClass(expand);
               content.filter(":visible").slideUp();
               $(this).parent().children('ul').stop(true, true).slideDown();
           }
       }); //accordion function
   
       content.hide();
   
   }); 
     
   }
   
   accordWithPage();
