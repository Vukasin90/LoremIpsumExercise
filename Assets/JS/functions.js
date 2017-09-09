$(function() {
    subMenu();
    sideBarMenu();
    ctaButtons();
});


    function subMenu() {
        $(".subMenuToggle").click(function() {
            $(".subNav").addClass("activeMenu");
            $(".close").removeClass("active");
            $(".subMenuToggle").addClass("active");
        });

        $(".close").click(function() {
            $(".subNav").removeClass("activeMenu");
            $(".subMenuToggle").removeClass("active");
            $(".close").addClass("active");
            
        });
    }

    function sideBarMenu() {
        $(".toggle").click(function() {
            $(".sideBar").css("left", "573px");

        });

        $(".close2").click(function() {
            $(".sideBar").css("left", "573px");
        });
    }

    function ctaButtons() {
        $(".phoneCTA").click(function() {
            alert("Our Phone number is: 445 7258 3968" );
        });
        $(".mailCTA").click(function() {
            alert("Our email is: our@email.com" );
        });
    }