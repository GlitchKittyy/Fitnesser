let clicked = 0;
var banner = document.getElementById("banner");
var versionID = document.getElementById("versionID");

version = "V3.1"
banner_text = [`${version} out now!`,`Fitnesser ${version}`]

let BANNER_TEXT = banner_text[(Math.floor(Math.random() * banner_text.length))];

window.onload = (event) => {
    banner.innerHTML = BANNER_TEXT;
    versionID.textContent = version;
    document.getElementById('year').textContent = new Date().getFullYear();
};

function header(){
    if(clicked === 3){
        banner.innerHTML = "Don't Click Me";
    }
    else if (clicked === 6){
        banner.innerHTML = "This is not a joke";
    }
    else if (clicked === 9){
        banner.innerHTML = "Just stop";
    }
    else if (clicked === 12){
        banner.innerHTML = "I'm just a Banner";
    }
    else if (clicked === 15){
        banner.innerHTML = "I'm gonna go";
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
        if(clicked >= 100 && clicked <= 105){
            banner.innerHTML = `SPOILER: Nothing comes after this`;
        }
        else if(clicked >= 115 && clicked <= 120){
            banner.innerHTML = `Just use the service`;
        }
        else if(clicked >= 150){
            banner.innerHTML = "R.I.P. Banner in 3 seconds";
            setTimeout(function(){
                banner.style.display = "none";
            },3000)
        }
        else{
            banner.style.backgroundColor = "#ff5e00";
            banner.innerHTML = `Clicked: ${clicked}`;
        }
    }
    

    clicked++;
    
}
