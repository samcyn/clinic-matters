var app = {
	sideBarController: function(){

		function initRightMenu(){
				//pick body
			var body = document.getElementsByTagName('body')[0];
			//pick leftsidebar from the DOM

			var $leftSidebar = document.getElementById('leftSidebar');
			//create a new elemnt called rightsidebar
			var $rightSideBar = document.createElement('aside');
			//add and id to it
			//console.log({$rightSideBar});
			//console.log($leftSidebar);

			//pick toggler
			var toggler = document.getElementsByClassName('navbar-burger')[0];

			$rightSideBar.id = 'rightSidebar';
			//append rightsidebar to body...
			//body.appendChild($rightSideBar);
			//cloneleftSidebar
			var $cloneLeftSideBar = $leftSidebar.cloneNode(true);
			//console.log($cloneLeftSideBar.innerHTML);
			//console.log(window.innerWidth);

			
			//console.log("I am at" + window.innerWidth);
			$rightSideBar.innerHTML = $cloneLeftSideBar.innerHTML;
			//append rightsidebar to body...
			body.appendChild($rightSideBar);

			//toggler handler
			function togglerHandler(e){
				body.classList.toggle('nav-open');
			}
			toggler.addEventListener('click', togglerHandler);
		

		}

		if (window.innerWidth <= 991) {
			initRightMenu();
		}
		//activate collapse right menu when the window is sized
		window.addEventListener('resize', function(){
			if(window.innerWidth <= 991){
				initRightMenu();
			}
		});

	},

	barchartController: function(){
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
	    	responsive: true,
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

	scatterchartController: function(){
		var ctx = document.getElementById("myscaChart");
		var scatterChart = new Chart(ctx, {
		    type: 'scatter',
		    data: {
		        datasets: [{
		            label: 'Scatter Dataset',
		            data: [{
		                x: -10,
		                y: 0
		            }, {
		                x: 0,
		                y: 10
		            }, {
		                x: 10,
		                y: 5
		            }]
		        }]
		    },
		    options: {
		    	responsive: true,
		        scales: {
		            xAxes: [{
		                type: 'linear',
		                position: 'bottom'
		            }]
		        }
		    }
		});
			},

	piechartController: function(){
		var ctx = document.getElementById("mypieChart");
		var piechart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
    	responsive: true,
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
	},


	doughnaughtchartController: function(){
		var ctx = document.getElementById("mydoughnutChart");
		var doughnutchart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
	}



			
		}
	
		 
                





