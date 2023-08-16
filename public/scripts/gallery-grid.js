$(document).ready(function () {
    var $grid = $('.gallery').masonry({
        itemSelector: 'img',
        columnWidth: 'img',
        gutter: 2,
        percentPosition: true,
        horizontalOrder: false
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
});