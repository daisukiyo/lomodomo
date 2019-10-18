imagesLoaded( document.querySelector('.grid'), function( instance ) {
    var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 151.5,
        fitWidth: true,
        transitionDuration: '0.4s',
        });
    console.log('all images are loaded');
  });   