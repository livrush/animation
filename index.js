const iframeSrcs = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'https://daneden.github.io/animate.css/',
  'http://ianlunn.github.io/Hover/',
  'http://www.joerezendes.com/projects/Woah.css/',
  '',
  // 'http://mojs.io/',
  'http://airbnb.io/lottie/',
  'https://greensock.com/',
  'https://www.delac.io/wow/',
  'http://animejs.com/',
];

$(document).ready(function() {
  $.scrollify({
    section : ".section",
    easing: "easeOutExpo",
    scrollSpeed: 200,
    overflowScroll: false,
    before: function(x) {
      console.log(x);
      const $firstSection = $('.section').first();
      const currentSection = $('.section').get(x);
      const $currentSection = $(currentSection);
      const iframeExists = $currentSection.children().children('iframe').length;
      if (iframeExists) $currentSection.children('.section-inner').children('iframe').attr('src', iframeSrcs[x]);
      $currentSection.addClass('empty')
      setTimeout(() => $currentSection.removeClass('empty'));
    }
  });

  $('.btn-begin').click(function(e) {
    $(e.currentTarget).removeClass('infinite pulse').addClass('fadeOutDown');
    setTimeout(function() {
      $('.title').removeClass('d-none');
    }, 500)
  })

  let venusKeyframeState = true;
  $('.img-venus.action').click(e => {
    if (venusKeyframeState) $('.img-venus-keyframes').fadeOut(1000);
    else $('.img-venus-keyframes').fadeIn(1000);
    venusKeyframeState = !venusKeyframeState;
  });

});

var lineDrawing = anime({
  targets: '#Bottle path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
