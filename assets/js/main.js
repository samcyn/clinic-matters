var app = {
    sidebarController: function(){

        var navbar_initialized = false;

        lbd = {
            misc:{
                navbar_menu_visible: 0
            },
            initRightMenu: function(){  
                if(!navbar_initialized){
                    //clone the navbar
                    $navbar = $('nav').find('.navbar-collapse').first().clone(true);
                    
                    //get the left sidebar ready
                    $sidebar = $('.leftSideBar');
                    
                    //define an empty list to add items..
                    ul_content = '';
                    

                    $sidebar.find('.sidebar-wrapper').children('ul').each(function(){
                    //console.log($(this).html());
                    ul_content += $(this).html();
                    });
                    
                
                    //add the content from the regular header to the right menu
                //   $navbar.children('ul').each(function(){
                //       ul_content +=   $(this).html();  
                //   });
                    
                    ul_content = '<aside class="rightSideBar"><ul class="menus">' + ul_content + '</ul></aside>';
                    
                    // $navbar.html(ul_content);
                    
                    $('body').append(ul_content);
                    
                    
                    
                    $toggle = $('.navbar-toggler');
                    
                    
                    
                    $toggle.click(function (){    
                        if(lbd.misc.navbar_menu_visible == 1) {
                            $('html').removeClass('nav-open'); 
                            lbd.misc.navbar_menu_visible = 0;
                            $('#bodyClick').remove();
                            setTimeout(function(){
                                $toggle.removeClass('toggled');
                            }, 400);
                        
                        } else {
                            setTimeout(function(){
                                $toggle.addClass('toggled');
                            }, 430);
                            
                            div = '<div id="bodyClick"></div>';
                            $(div).appendTo("body").click(function() {
                                $('html').removeClass('nav-open');
                                lbd.misc.navbar_menu_visible = 0;
                                $('#bodyClick').remove();
                                setTimeout(function(){
                                    $toggle.removeClass('toggled');
                                }, 400);
                            });
                        
                            $('html').addClass('nav-open');
                            lbd.misc.navbar_menu_visible = 1;
                            
                        }
                    });
                    navbar_initialized = true;
                }

            }
        }

        // Init navigation toggle for small screens   
        if($(window).width() <= 991){
            lbd.initRightMenu();   
        }

        // activate collapse right menu when the windows is resized 
        $(window).resize(function(){
            if($(window).width() <= 991){
                lbd.initRightMenu();   
            }
        });

    },
    showNotification: function(from, align, name){
        type = ['primary','secondary','success','dark','danger'];
    	
        color = Math.floor((Math.random() * 4) + 1);
        
        $.notify({
            icon: "fa fa-gift",
            message: "Hi" + " " +  name + "," + " " + "welcome to this wonderful dashboard."
            
        },{
            type: type[color],
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    }



}
