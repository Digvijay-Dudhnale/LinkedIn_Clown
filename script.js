let profileMenu = document.querySelector("#profileMenu") ;

function toggleMenu(){
    profileMenu.classList.toggle('open-menu') ;
}

// FOR RESPONSIVE DESIGN
let sidebarActivity = document.querySelector(".sidebar-activity");
let showMoreLink = document.querySelector("#show-more-link");

function toggleActivity(){
    sidebarActivity.classList.toggle('open-activity');
    if(sidebarActivity.classList.contains("open-activity")){
        showMoreLink.innerHTML = "Show Less <b>-</b>";
    }
    else{
        showMoreLink.innerHTML = "Show More <b>+</b>";
    }
}