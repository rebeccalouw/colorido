const seedColour = document.getElementById("seed-colour")
const colourSelector = document.getElementById("colour-mode")
const getColourSchemeBtn = document.getElementById("get-colour-scheme-btn")
const colourSchemeDiv = document.getElementById("colour-scheme-div")
let coloursArray = []

function renderColours() {
    let coloursArrayHtml = coloursArray.map(colour => {
        
        return `
            <div class="colour-component">
                <div class="colour-block" style="background:${colour.hex.value}"></div>
                <div class="colour-info">
                    <h5 class="colour-hex">${colour.hex.value}</h5>
                    <p class="colour-name">${colour.name.value}</h5>
                </div>
            </div>
        `
    }).join('')

    colourSchemeDiv.innerHTML = coloursArrayHtml
}


function getColourScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColour.value.slice(1)}&mode=${colourSelector.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            coloursArray = data.colors
            renderColours()
        }) 
}


function copyHex(e) {
    if(e.target.tagName === "H5") {
        const hexCode = e.target.textContent
        navigator.clipboard.writeText(hexCode)
        e.target.textContent = 'copied'
        setTimeout(() => {
            e.target.textContent = hexCode
        }, 1000)
    } else return
}


getColourSchemeBtn.addEventListener('click', (e) => {
    (e).preventDefault()
    getColourScheme()
    })

colourSchemeDiv.addEventListener('click', copyHex)

// show other values on hover ???
// format CSS



