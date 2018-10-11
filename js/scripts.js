//Copyright (c) 2014 Alvaro Trigo <alvaro@alvarotrigo.com>

$(function(){
  console.log('DOM is loaded');

  $('#pagepiling').pagepiling({
	       menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#ffb6c1', '#FF7899', '#FF6980', '#7F3540', '#CC929A', '#e75480', '#FF6980', '#ffb6c1'],
        anchors: ['MeToo', 'GoingViral', 'History', 'BelieveWomen', 'Kavanaugh', 'TimesUp', 'Quiz', 'Sources'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#a1a1a1',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips':
            ['#MeToo',
            'Going Viral',
            '#MeToo: A History', '#BelieveWomen', 'Thomas vs. Kavanaugh',
            'Time\'s Up',
            'Quiz',
            'Sources' ]
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){
      //initializing typed.js
      var typed = new Typed('#typed',{
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 5,
        loop: false
      });

      //initializing the quiz
      $('#slickQuiz').slickQuiz({
        // options
      });

      //initializing the card flip
      $('.card').click(function(){
        $(this).toggleClass('flipped');
      });

      //initializing the Curator.io
      (function(){
        var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
        i.src = "https://cdn.curator.io/published/e1e1f5ab-d4e6-4561-a4a0-59cbef5c1b57.js";
        e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
      })();
    },
	});




//*closing of the document.ready
});
