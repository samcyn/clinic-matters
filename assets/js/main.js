var app = {
    sideBarController: function(){
  function rightMenu(){
            //pick body
var body = document.getElementsByTagName('body')[0];

//pick leftsidebar from the DOM
var $leftSideBar = document.getElementById('leftSideBar');

//create a new element called rightsidebar
var $rightSideBar = document.createElement('aside');

//pick a toggler
var toggler = document.getElementsByClassName('navbar-burger')[0];

//add an id
$rightSideBar.id = 'rightSidebar';



//clone leftsidebar
var $cloneLeftSideBar = $leftSideBar.cloneNode(true);
//console.log($cloneLeftSideBar.innerHTML);



if(window.innerWidth <= 991) {
    //console.log('I am at ' + window.innerWidth);
    $rightSideBar.innerHTML = $cloneLeftSideBar.innerHTML;
    
    //append rightsidebar to body
    body.appendChild($rightSideBar)
    
    //toggler handler
    function togglerHandler(e){
        body.classList.toggle('nav-open');
    }
    
    toggler.addEventListener('click', togglerHandler);
}
  }
        if (window.innerWidth <= 991) {
            rightMenu();
        }
        //activate collapse for right bar when window is resized
        window.addEventListener('resize', function(){
           if(window.innerWidth <= 991){
               rightMenu();
           } 
        });
    },
    
    barChartController: function(){
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
    
    lineChartController: function(){
        new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});
    },
    
    horizontalBarChartController: function(){
        new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
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
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
    },
    
    mixedChartController: function(){
        new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
      },
      legend: { display: false }
    }
});
    },
    
    doughnutChartController: function(){
        new Chart(document.getElementById("doughnut-chart"), {
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
    },
    
    radarChartController: function(){
        new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
    },
    
    Charts: function(){
        app.barChartController();
        app.lineChartController();
        app.horizontalBarChartController();
        app.mixedChartController();
        app.doughnutChartController();
        app.radarChartController();
    },
    
    initIntro: function(){
                var $this = this;

               function startIntro(){
                    var intro = introJs();
                      intro.setOptions({
                        showBullets : true,
                        steps: [
                          {
                            element: '#leftSideBar', position: "right",
                            intro: "Get quick access to detailed pages on this site"
                          },{
                            element: '.admin', position: "bottom",
                            intro: "Here is your profile summary."
                          },{
                            element: '.panels', position: "top",
                            intro: "Assess compiled real-time reports"
                          },{
                            element: '#charts-', position: "left",
                            intro: "Visual display of progress charts and recent surveys"
                          }
                        ]
                      });

                   intro.start();
                    $("html, body").scrollTop(0);
                    intro.oncomplete(function() {
                        $("html, body").scrollTop(0);
                        
                         $this.counter();
                    });
                   
                    intro.onexit(function() {
                        $("html, body").scrollTop(0);
                        
                        $this.counter();
                    });
                }

               startIntro();

               /* Replay Intro on Button click
                $('#start-intro').click(function () {
                    startIntro();
                });*/
            },
    
    counter: function(){
        $('.widget-thumb-body-stat').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-value');
          
         $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

         {

           duration: 2000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

         });  
       });
      }
}


