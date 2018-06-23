const iframeSrcs = [
  'https://daneden.github.io/animate.css/',
  'http://ianlunn.github.io/Hover/',
  'http://www.joerezendes.com/projects/Woah.css/',
  'http://mojs.io/',
  'https://greensock.com/',
  'http://animejs.com/',
];

$(document).ready(function() {
  $.scrollify({
    section : ".section",
    easing: "easeOutExpo",
    scrollSpeed: 200,
    overflowScroll: false,
    before: function(x, y) {
      console.log(x, y);
      const $firstSection = $('.section.empty').first();
      const iframeExists = $firstSection.children('iframe').length;
      if (iframeExists) $firstSection.children('iframe').attr('src', iframeSrcs.shift());
      $firstSection.removeClass('empty');
    }
  });

  $('.btn-begin').click(function(e) {
    $(e.currentTarget).removeClass('infinite pulse').addClass('fadeOutDown');
    setTimeout(function() {
      $('.title').removeClass('d-none');
    }, 500)
  })

  $('.img-venus-keyframes').click(e => $(e.currentTarget).fadeOut(1000));
});