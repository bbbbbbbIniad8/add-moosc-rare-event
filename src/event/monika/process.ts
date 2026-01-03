
function monikaEvent(){
    const userChoice = confirm(Math.random() <= 0.8 ? "モニカのことだけ" : "just monika");
    if (userChoice){
        const imgs = document.querySelectorAll(".col-lg-4.col-sm-6.col-xs-12 img")
        const header4 = document.querySelectorAll(".col-lg-4.col-sm-6.col-xs-12 h4")
        const anchers = document.querySelectorAll(".col-lg-4.col-sm-6.col-xs-12 a")
        imgs.forEach(element  => {
            const imgElement = element as HTMLImageElement;
            imgElement.src = chrome.runtime.getURL("src/event/monika/pic/monika.png")
            imgElement.style = "object-fit: contain;"
        });

        header4.forEach(element =>{
            element.textContent = "情報連携のためのモニカ"
        })

        anchers.forEach(element=>{
            const ancherElement = element as HTMLAnchorElement
            ancherElement.href = "https://x.com/lilmonix3"
            element.textContent = ""

            const i = document.createElement("i")
            i.textContent = " view just monika"
            i.className = "fa fa-play-circle"
            element.appendChild(i)
            
        }
        )
    }
}

export { monikaEvent }