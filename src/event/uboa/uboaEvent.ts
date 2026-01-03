window.onload = () => {
    const uboaImg = document.getElementById("uboa") as HTMLImageElement
    if (uboaImg) {
        const url = chrome.runtime.getURL("src/event/uboa/pic/uboaEventFin.png")
        console.log("Loading Image URL:", url)
        uboaImg.src = url
    }
};