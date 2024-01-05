const projects = [
    {
        name: 'Grocery List App',
        discription: 'Ingredients from recipes can be compiled in to a list to shop with or share.',
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: 'https://github.com/dielawn/grocery-list-app',
        id: 'listAppDiv',
    },
    {
        name: 'Caesar Cippher',
        discription: 'Rot 13 Cipher. Simple text cipher used by Caesar to share secure messages with Generals. Shifting the alphabet by 13, M = A, N = B, etc... ',
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: '',
        id: 'cipherAppDiv',
    },
    {
        name: 'Pleb Wallet',
        discription: 'Bitcoin lightning wallet. Simple wallet leveraging the power of the LNBITS api, to send, recieve, and check transaction history.',
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: 'https://github.com/dielawn/lnbits_wallet',
        id: 'plebWalletAppDiv',
    },
    {
        name: 'Battle Ship',
        discription: `Each player deploys his ships (of lengths varying from 2 to 5 squares) secretly on a square grid. Then each player shoots at the other's grid by calling a location. The defender responds by "Hit!" or "Miss!". You try to deduce where the enemy ships are and sink them.`,
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: 'https://github.com/dielawn/battel-ship',
        id: 'battleShipAppDiv',
    },
    {
        name: 'Chroma Salon',
        discription: `Website for a salon in Tacoma Washington. Responsive site works and looks good on all screen sizes. Contact cards for each stylist makes booking appointments just a click away!`,
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: 'https://github.com/dielawn/chroma',
        id: 'chromaSiteDiv',
    },
    {
        name: 'Lightning Arcade',
        discription: `Simple javascript games behind a lightning paywall. Just 25 sats to play any game! Games: Pong, Rock Paper Scissors, Battleship etc...`,
        screenshot: 'https://raw.githubusercontent.com/cashubtc/cashu-ui/2eec1685cb74ea19738709a2bb9d4a8f23dc0a90/ui/icons/svg/cashu.svg',
        url: '',
        github: 'https://github.com/dielawn/lightning-arcade',
        id: 'lightningArcadeAppDiv',
    },
]



const displayProjectCards = () => {
    projects.forEach(project => {
       
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.id = project.id

        const imgEl = document.createElement('img')
        imgEl.classList.add('nutImg')
        imgEl.src = project.screenshot

        const projHeader = document.createElement('h3')
        projHeader.classList.add('projHeader')
        projHeader.textContent = project.name

       const linksDiv = document.createElement('div')
       linksDiv.classList.add('linkDiv')

        const githubLink = document.createElement('a')
        githubLink.href = project.github

        const githubIcon = document.createElement('img')
        githubIcon.classList.add('icon')
        githubIcon.src = "icons/github-mark/github-mark.svg"

        const weblink = document.createElement('a')
        weblink.href = project.url
        
        const webLinkIcon = document.createElement('span')
        webLinkIcon.innerHTML =  `<span class="material-symbols-outlined icon">
        arrow_outward
        </span>`

        const discTxt = document.createElement('p')
        discTxt.innerText = project.discription

        githubLink.appendChild(githubIcon)
        weblink.appendChild(webLinkIcon)

        cardDiv.appendChild(imgEl)
        cardDiv.appendChild(projHeader)
        linksDiv.appendChild(githubLink)        
        linksDiv.appendChild(weblink)
        cardDiv.appendChild(linksDiv)

        cardDiv.appendChild(discTxt)
        
        document.querySelector('.workDiv').appendChild(cardDiv)
    })
}
displayProjectCards()