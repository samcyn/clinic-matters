var app = {
	sidebarcontroller:function(){
		// pick body
		var body = document.getElementsByTagName('body')[0];

		// pick leftsidebar from the DOM
		var $leftsidebar = document.getElementById('leftSidebar');

		// create a new element called rightsidebar
		var $rightsidebar = document.createElement('aside');

		var toggler = document.getElementsByClassName('navbar-burger')[0];

		// add an id to it
		$rightsidebar.id = 'rightsidebar';

		// clone leftsidebar
		var $cloneleftsidebar = $leftsidebar.cloneNode(true);
		console.log({$cloneleftsidebar});

		if (window.innerWidth <= 991){
			// console.log('I am at' + ' ' + window.innerWidth);
			$rightsidebar.innerHTML = $cloneleftsidebar.innerHTML;

			// apend rightsidebar to body...
			body.appendChild($rightsidebar);

			// toggler handler
			function togglerhandler(e){
				body.classList.toggle('nav-open');
			}
			toggler.addEventListener('click', togglerhandler);
		}
	},

	barchartcontroller: function(){
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	},

	piechartcontroller: function(){
		var ctx = document.getElementById("myPieChart");
		var myPieChart = new Chart(ctx, {
			type: 'pie',
    		data:  {
		        labels: ["Red", 
		        		 "Blue", 
		        		 "Yellow",
		        		  "Green", 
		        		  "Purple", 
		        		  "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
    		// options:  {
		    //    // cutoutPercentage: 0;
		    //    rotation: -0.5;
		    //    circumference: 2;
		    //    animation.animateRotate: true;
		    //    animation.animateScale: false;
		    // }
		});
	},

	polarchartcontroller: function(){
		var ctx = document.getElementById("myPolarChart");
		var myPolarChart = new Chart(ctx, {
			type: 'polarArea',
			data: {labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		});
	},

	bubblechartcontroller: function(){
		var ctx = document.getElementById("myBubbleChart");
		var myBubbleChart = new Chart(ctx, {
			type: 'bubble',
			data: { 
				labels: ["Red", 
		        		 "Blue", 
		        		 "Yellow",
		        		  "Green", 
		        		  "Purple", 
		        		  "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
			},
			options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	},

	linechartcontroller: function(){
		var ctx = document.getElementById('myLineChart');
		var myLineChart = new Chart(ctx, {
			type: 'line',
    		data: { 
				labels: ["Red", 
		        		 "Blue", 
		        		 "Yellow",
		        		  "Green", 
		        		  "Purple", 
		        		  "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
			},
            options: {
        		scales: {
           			yAxes: [{
                		stacked: true
           			}]
        		}
   			}
		});
	},

	scatterchartcontroller: function(){
		var ctx = document.getElementById('myScatterChart');
		var scatterChart = new Chart(ctx, {
	   		type: 'scatter',
	   		data: {
	        	datasets: [{
		            labels: ["Red", 
			        		 "Blue", 
			        		 "Yellow",
			        		  "Green", 
			        		  "Purple", 
			        		  "Orange"],
		            data: [{
		                x: -10,
		                y: 0
		            }, {
		                x: 0,
		                y: 10
		            }, {
		                x: 10,
		                y: 5
		            },{
		            	x: 4,
		            	y: 6
		            },{
		            	x: 3,
		            	y: 6
		            },{
		            	x: 7,
		            	y: 4
		            }],

		            backgroundColor: [
			            'rgba(255, 99, 132, 0.2)',
			            'rgba(54, 162, 235, 0.2)',
			            'rgba(255, 206, 86, 0.2)',
			            'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
			        ],
			        borderColor: [
						'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
			        ],
			        borderWidth: 1
		        }]
	    	},
		  	options: {
		       	scales: {
	        		xAxes: [{
		               	type: 'linear',
		               	position: 'bottom'
	            	}]
		       	}
		    }
		});
	},
};	



