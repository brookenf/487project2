//Copyright (c) 2014 Alvaro Trigo <alvaro@alvarotrigo.com>

$(function(){
  console.log('DOM is loaded');

  //initializing typed.js
  var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 5,
    loop: false
  });


  $('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#ffb6c1', '#FF6980', '#7F3540', '#CC929A', '#7F5B60', '#FF6980', '#ffb6c1'],
        anchors: ['MeToo', 'History', 'BelieveSurvivors', 'Kavanaugh', 'TimesUp', 'Quiz', 'Sources'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#a1a1a1',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips':
            ['#MeToo',
            '#MeToo: A History', '#BelieveSurvivors', 'Thomas vs. Kavanaugh',
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
      //initializing the quiz
      $('#slickQuiz').slickQuiz({
        // options
      });
    },
	});




//*closing of the document.ready
});
