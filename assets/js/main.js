var app = {
	sideBarController: function(){
		//pick body
		var body = document.getElementsByTagName('body')[0];

		//pick leftsidebar from the DOM
		var $leftSideBar = document.getElementById('leftSideBar');

		//create a new element
		var $rightSideBarNew = document.createElement('aside');

		//pick toggler
		var toggler = document.getElementsByClassName('navbar-burger')[0];

		//add an id to it
		$rightSideBarNew.id = 'rightSideBarNew';

		//append to body
		// body.appendChild($rightSideBarNew);

		//clone leftSideBar

		var $cloneleftSideBar = $leftSideBar.cloneNode(true);

		// console.log({$rightSideBarNew});
		// console.log({$cloneleftSideBar});
		//console.log($cloneleftSideBar.innerHTML);
		// console.log(window.innerWidth);
		// console.log(window);

		if (window.innerWidth <= 991){
			//console.log('I am at ' + window.innerWidth);
			$rightSideBarNew.innerHTML = $cloneleftSideBar.innerHTML;

			//append to body
			body.appendChild($rightSideBarNew);

			function togglerHandler(e){
				body.classList.toggle('nav-open');
			}

				toggler.addEventListener('click', togglerHandler);

		}
	},

	barChartController: function(){
		var ctx = document.getElementById("barChart");
		var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                '#FD203B',
	                '#208BFD',
	                '#FDFD20',
	                '#20FD2E',
	                '#C420FD',
	                '#FDA920'
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

	doughnutChartController: function(){
		var ctx = document.getElementById("doughnut-chart");
		var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
	      datasets: [
	        {
	          label: "Population (millions)",
	          backgroundColor: ["#FD203B", "#208BFD","#FDFD20","#20FD2E","#C420FD"],
	          data: [2478,5267,734,784,433]
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: '# of Votes'
	      }
	    }
		});
	},

	lineChartController: function(){
		var ctx = document.getElementById("line-chart");
		var myChart = new Chart(ctx, {
		  type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
		    datasets: [{ 
		        data: [86,114,106,106,107,111,133,221,783,2478],
		        label: "Red",
		        borderColor: "#FD203B",
		        fill: false
		      }, { 
		        data: [282,350,411,502,635,809,947,1402,3700,5267],
		        label: "Blue",
		        borderColor: "#208BFD",
		        fill: false
		      }, { 
		        data: [168,170,178,190,203,276,408,547,675,734],
		        label: "Yellow",
		        borderColor: "#208BFD",
		        fill: false
		      }, { 
		        data: [40,20,10,16,24,38,74,167,508,784],
		        label: "Green",
		        borderColor: "#20FD2E",
		        fill: false
		      }, { 
		        data: [6,3,2,2,7,26,82,172,312,433],
		        label: "Purple",
		        borderColor: "#C420FD",
		        fill: false
		      }
		    ]
		  },
		  options: {
		    title: {
		      display: true,
		      text: '# of Votes'
		    }
		  }
		});
	},

	hbarChartController: function(){
		var ctx = document.getElementById("bar-chart-horizontal");
		var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                '#FD203B',
	                '#208BFD',
	                '#FDFD20',
	                '#20FD2E',
	                '#C420FD',
	                '#FDA920'
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

	barChartController2: function(){
		var ctx = document.getElementById("barChart2");
		var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                '#FD203B',
	                '#208BFD',
	                '#FDFD20',
	                '#20FD2E',
	                '#C420FD',
	                '#FDA920'
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

	doughnutChartController2: function(){
		var ctx = document.getElementById("doughnut-chart2");
		var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
	      datasets: [
	        {
	          label: "Population (millions)",
	          backgroundColor: ["#FD203B", "#208BFD","#FDFD20","#20FD2E","#C420FD"],
	          data: [2478,5267,734,784,433]
	        }
	      ]
	    },
	    options: {
	      title: {
	        display: true,
	        text: '# of Votes'
	      }
	    }
		});
	},

};


