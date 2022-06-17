function SkillList() {
    class Skill {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }
    }

    function SortByLevel(){       
        let button = document.querySelector(".by-level");
        button.desc = false;
        button.onclick = function(){
            if(this.desc){
                this.desc = false;
                skills.list.sort((a, b) => Number(a.level.slice(0,-2)) > Number(b.level.slice(0,-2)));                                  
            }
            else{
                this.desc = true;
                skills.list.sort((a, b) => Number(a.level.slice(0,-2)) < Number(b.level.slice(0,-2)));     
                    
            }
            skills.generateElements();
            skills.resetSortedButtons(button);
        }       
    }

    function SortByName(){       
        let button = document.querySelector(".by-name");
        button.desc = false;
        button.onclick = function(){
            if(this.desc){
                this.desc = false;                
                skills.list.sort((a, b) => a.name < b.name);
                //skills.list = skills.list.reverse();
               
            }
            else{
                this.desc = true;
                skills.list.sort((a, b) => a.name > b.name);                
            }
            skills.generateElements();
            skills.resetSortedButtons(button);
        }     
    }
    SortByLevel();
    SortByName();

    return {    
        sortedBy: "",   
        list:
        [
            new Skill("HTML", "30%"),
            new Skill("CSS", "40%"),
            new Skill("JS", "30%"),
            new Skill("C++", "72%"),
            new Skill("Go", "50%"),
            new Skill("SQL", "60%")
        ],
        generateElements: function(){              
            skillsListElement.innerHTML = '';
            this.list.forEach(skill => {
                let decl = document.createElement("dt");
                // image name format: img/icon-{lowercase name}.svg
                decl.style.backgroundImage = `url('img/icon-${skill.name.toLowerCase()}.svg')`;
                decl.innerHTML = skill.name ;
            
                let level = document.createElement("dd");
                level.classList += "level";
            
                let container = document.createElement("div");
                container.style.width = skill.level;
                container.textContent = skill.level  ; 
                level.appendChild(container);
            
                skillsListElement.appendChild(decl);
                skillsListElement.appendChild(level);    
            });           
        },  
        /* resetting a saved sort when sorting by another sort button */
        resetSortedButtons(button){
            if(skills.sortedBy != button){
                skills.sortedBy.desc = false;
                skills.sortedBy = button;
            }
        }      
    }        
}

const skillsListElement = document.querySelector(".skills-list");

let skills = new SkillList()
skills.generateElements()



