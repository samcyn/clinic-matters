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
    }
}


