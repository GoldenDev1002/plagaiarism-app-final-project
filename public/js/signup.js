let tabButtons = document.querySelectorAll(".tabContainer .btnContainer button");
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
    tabButtons.forEach((button)=> {
        button.style.backgroundColor = "";
        button.style.textColor = ""
    })

    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";

    tabPanels.forEach((panel)=> {
        panel.style.display = "none";
        panel.style.backgroundColor = "white"
       
    })

    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;

}

showPanel(0, "#0A2A5B")