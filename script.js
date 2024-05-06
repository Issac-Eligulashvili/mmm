// Team Member Data

const teamMembers = [
 {
    name: 'Lionel Messi',
    age: 36,
    activePlayer: true,
    position: 'forward',
    strengths: 'Ball Control',
    skills: ['Dribbling', 'Finishing', 'Playmaking'],
    foot: 'Left Footed',
    biography: 'Messi oh where do I begin ever since Ive seen you cut in on that magical left foot I knew you were my king. The way you gracefully fry your defenders and leave them in the dust with your excellent ball control and vision of the game. You revolutionized the game and are truly the best of all time. My King. The man who shook hands with paradise. The little boy from Rosario. Leo Messi <33'
 }   
]

function generateTeamCards() {
    const teamCardsContainer = document.querySelector('#teamCard')

    teamMembers.forEach(member => {

        const card = document.createElement('div')

        card.classList.add('col-md-4')
        card.innerHTML = `
        <div class="card">
            <div class="card-header">
                ${member.name}
            </div>
        </div>
        `

        teamCardsContainer.appendChild(card)

        
    });
}

window.onload = generateTeamCards;

