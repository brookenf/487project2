$(function(){
  console.log('DOM is loaded');

  $('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#ffb6c1', '#ffb6c1', '#ffb6c1', '#ffb6c1', '#ffb6c1', '#ffb6c1', '#ffb6c1'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'linear',
        loopBottom: true,
        loopTop: true,
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
		afterRender: function(){},
	});


//*closing of the document.ready
});
