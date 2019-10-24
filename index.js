'use strict';
$(function() {
  $('.thumbnail').on('click', event =>{
    event.preventDefault();
    let srcAttr = $(event.currentTarget).find('img').attr('src');
    let altAttr = $(event.currentTarget).find('img').attr('alt');
    $('.hero').children().attr('src', srcAttr);
    $('.hero').children().attr('alt', altAttr);  
  });
});
