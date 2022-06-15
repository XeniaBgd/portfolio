let skillList = [
    {
        name:"HTML", 
        level: "30%",       
    },
    {
        name:"CSS", 
        level: "40%",       
    },
    {
        name:"JS", 
        level: "30%",       
    },
    {
        name:"C++", 
        level: "72%",      
    },
    {
        name:"Go", 
        level: "50%",        
    },
    {
        name:"SQL", 
        level: "60%",        
    }
]

let skillsListElement = document.querySelector(".skills-list")
skillList.forEach(skill => {
    let decl = document.createElement("dt")
    // image name format: img/icon-{lowercase name}.svg
    decl.style.backgroundImage = `url('img/icon-${skill.name.toLowerCase()}.svg')`
    decl.innerHTML = skill.name 

    let level = document.createElement("dd")
    level.classList += "level"

    let container = document.createElement("div")
    container.style.width = skill.level
    container.textContent = skill.level   
    level.appendChild(container) 

    skillsListElement.appendChild(decl)
    skillsListElement.appendChild(level)    
});

