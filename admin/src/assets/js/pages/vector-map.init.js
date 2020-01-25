
/*
Template Name: Apaxy - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Version: 1.0.0
Website: https://themesdesign.in/
File: Property list filter init js
*/


!function($) {
    "use strict";

    var VectorMap = function() {};

    VectorMap.prototype.init = function() {
        		//various examples
		$('#world-map-markers').vectorMap({
			map : 'world_en',
			normalizeFunction : 'polynomial',
			hoverOpacity : 0.7,
			hoverColor : false,
			backgroundColor: '#transparent',
			color: '#f2f5f7',
			borderColor: '#bcbfc7',
			colors: {
				in: '#3d8ef8',
				au: '#3d8ef8',
				gl: '#3d8ef8',
				us: '#3d8ef8',
				sa: '#3d8ef8'
			},
			borderColors: {
				in: '#3d8ef8',
				au: '#3d8ef8',
				gl: '#3d8ef8',
				us: '#3d8ef8',
				sa: '#3d8ef8'
			}
		});

		$('#usa').vectorMap({
			map: 'usa_en',
			enableZoom: true,
			showTooltip: true,
			selectedColor: null,
			hoverColor: '#5b9ff9',
			backgroundColor: 'transparent',
			color: '#3d8ef8',
			borderColor: '#bcbfc7',
			colors: {
				ca: '#5b9ff9',
				tx: '#5b9ff9',
				mt: '#5b9ff9',
				ny: '#5b9ff9'
			},
			onRegionClick: function (event, code, region) {
				event.preventDefault();
			}
		});

		$('#canada').vectorMap({
            map: 'canada_en',
            backgroundColor: 'transparent',
            color: '#3d8ef8',
			hoverColor: '#5b9ff9',
			borderColor: '#bcbfc7',
            enableZoom: true,
			showTooltip: true,
		});
		
		$('#france').vectorMap({
            map: 'france_fr',
            backgroundColor: 'transparent',
			color: '#3d8ef8',
			borderColor: '#bcbfc7',
            hoverColor: '#5b9ff9',
            enableZoom: true,
			showTooltip: true,
		});
		
		$('#germany').vectorMap({
            map: 'germany_en',
            backgroundColor: 'transparent',
			color: '#3d8ef8',
			borderColor: '#bcbfc7',
            hoverColor: '#5b9ff9',
            enableZoom: true,
			showTooltip: true,
		});

		$('#brazil').vectorMap({
            map: 'brazil_br',
            backgroundColor: 'transparent',
			color: '#3d8ef8',
			borderColor: '#bcbfc7',
            hoverColor: '#5b9ff9',
            enableZoom: true,
			showTooltip: true,
        });

  },
    //init
    $.VectorMap = new VectorMap, $.VectorMap.Constructor = VectorMap
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.VectorMap.init()
}(window.jQuery);