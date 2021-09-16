
  

let theme = localStorage.getItem('theme')

if(theme ==null ) { 
    setTheme('light')
} else { 
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){ 
    themeDots[i].addEventListener('click', function() { 
        let mode = this.dataset.mode    
        console.log('option clickedd: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) { 
    if(mode == 'light') { 
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue') { 
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'purple') { 
        document.getElementById('theme-style').href = 'purple.css'
    }

    if(mode == 'green') { 
        document.getElementById('theme-style').href = 'green.css'
    }

    localStorage.setItem('theme', mode)
}

let button = document.getElementsByClassName('browser-dots')

function redAlert() { 
    alert("Whoa.... You really want to leave me?")
    } 

function orangeAlert() { 
    alert("I see you tried to minimize.. Too bad")
} 

function greenAlert() { 
    alert("This is not a mac BUDDY")
} 


