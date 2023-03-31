window.onload = (e) => {
    let congrats = document.getElementById('congrats');
    console.log("page is fully loaded");
    document.getElementById("music").volume = 0.1;
    let score = 0;
    let itemsEasy = document.getElementsByClassName('easy_01');/* tableau items les noms des items à trouver*/
    score = findItem(itemsEasy, score);
    let itemMedium = document.getElementsByClassName('medium');
    score = findItem(itemMedium, score);
    let itemHard = document.getElementsByClassName('hard');
    score = findItem(itemHard, score);
    function findItem(items, score) {
        for (const i in items) {
            if (Object.hasOwnProperty.call(items, i)) {
                let element = items[i];
                element.addEventListener('click', () => { /* elem clické je recup attribut name */
                    let listSpan = document.getElementsByTagName('span'); /* comparer l elem clické avec le span qui porte son nom et rayé*/
                    for (const key in listSpan) {
                        if (Object.hasOwnProperty.call(listSpan, key)) {
                            let spanItem = listSpan[key];
                            if (spanItem.getAttribute('name') == element.getAttribute("name") && spanItem.style.textDecoration !== 'line-through') {
                                spanItem.style.textDecoration = 'line-through'; /* calculer le score et enlever les elements du tableau listItems */
                                score = score + 1;
                                document.getElementById('score').innerHTML = 'Score : ' + score + '/10';
                            }
                            else if (score == 10) { /**afficher bravo ! */
                            congrats.style.visibility = 'visible';
                            }
                        }
                    }
                });
            }
        }
        return score;
    }

    const departMinutes = 3
    let temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
        timerElement.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1
        if(temps == 0){
            congrats.innerHTML = "PERDU !";
            congrats.style.color = "red";
            congrats.style.visibility = 'visible';
        }
    }, 1000);
    
}

