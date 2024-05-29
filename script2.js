let clicked = 0;
var banner = document.getElementById("banner");
let BANNER_TEXT = "V3.0 out now!"

window.onload = (event) => {
    banner.innerHTML = BANNER_TEXT;
    document.getElementById('year').textContent = new Date().getFullYear();
};

function header(){
    if(clicked === 3){
        banner.innerHTML = "Why did you click me?";
    }
    else if (clicked === 6){
        banner.innerHTML = "Stop it";
    }
    else if (clicked === 9){
        banner.innerHTML = "Not funny";
    }
    else if (clicked === 12){
        banner.innerHTML = "Im gonna go";
    }
    else if (clicked === 15){
        banner.innerHTML = "Last chance!";
    }
    else if (clicked === 18){
        banner.innerHTML = "Bye";
    }
    else if (clicked === 19){
        banner.innerHTML = BANNER_TEXT;
    }
    else if(clicked === 25){
        banner.innerHTML = "Oh you again..";
    }
    else if(clicked === 28){
        banner.innerHTML = "Im getting mad now...";
        banner.style.backgroundColor = "#ff0000";
    }
    else if(clicked === 31){
        banner.innerHTML = "Bye for real now";
    }
    else if(clicked === 33){
        banner.innerHTML = BANNER_TEXT;
    }
    else if(clicked >= 40 && clicked <= 80){
        if(clicked >= 50 && clicked <= 55){
            banner.innerHTML = `Wait I turned red?! Since when?!`
        }
        else{
            banner.innerHTML = `You clicked me ${clicked} times now`;
        }
    }
    else if (clicked >= 80){
        banner.style.backgroundColor = "#ff5e00";
        banner.innerHTML = `Clicked: ${clicked}`;
    }
    

    clicked++;
    
}
