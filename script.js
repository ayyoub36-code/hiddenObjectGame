window.onload = (e) => {
    console.log("page is fully loaded");
    let items = document.getElementsByClassName('easy_01');/* tableau items les noms des items à trouver*/
    let score = 0;
    for (const i in items) {
        if (Object.hasOwnProperty.call(items, i)) {
            let element = items[i];
            /** elem clické je recup attribut name je vais dans la listSpan et je raye le span qui a le meme name ! */
            element.addEventListener('click', () => {
                let itemName = element.getAttribute("name");
                /* comparer l elem clické avec le span qui porte son nom et rayé*/
                let listSpan = document.getElementsByTagName('span');
                for (const key in listSpan) {
                    if (Object.hasOwnProperty.call(listSpan, key)) {
                        let spanItem = listSpan[key];
                        if (spanItem.getAttribute('name') == element.getAttribute("name") && spanItem.style.textDecoration !== 'line-through') {
                            spanItem.style.textDecoration = 'line-through';  /* calculer le score et enlever les elements du tableau listItems */
                            score = score +1;
                            document.getElementById('score').innerHTML = 'Score : ' + score + '/10';
                        }
                        else if (score == 10 ){   /**afficher bravo ! */
                            console.log('Bravo');
                        }
                    }
                }

                /* tableau des items */
                //const listItems = ['baguette', 'pigeon', 'couteau', 'peau_banane', 'papillon_vert', 'ketchup', 'donat', 'coquillage', 'cloche', 'glace'];
            })
        }
    }


/**
 * au moment du clic, on donne a la fonction le noml de la classe de l image choisie
 * et après ben le traitement il va suivre tout seul car logiquement ça devrait le faire
 *  */


let itemMedium = document.getElementsByClassName('medium');
    let scoreMedium = 0;
    for (const i in itemMedium) {
        if (Object.hasOwnProperty.call(itemMedium, i)) {
            let ele = itemMedium[i];
            /** elem clické je recup attribut name je vais dans la listSpan et je raye le span qui a le meme name ! */
            ele.addEventListener('click', () => {
                let itemName = ele.getAttribute("name");
                /* comparer l elem clické avec le span qui porte son nom et rayé*/
                let listSpan = document.getElementsByTagName('span');
                for (const key in listSpan) {
                    if (Object.hasOwnProperty.call(listSpan, key)) {
                        let spanItem = listSpan[key];
                        if (spanItem.getAttribute('name') == ele.getAttribute("name") && spanItem.style.textDecoration !== 'line-through') {
                            spanItem.style.textDecoration = 'line-through';
                            /* calculer le score et enlever les elements du tableau listItems */
                            scoreMedium = scoreMedium +1;
                            document.getElementById('score').innerHTML = 'Score : ' + scoreMedium + '/10';
                        }
                        else if (scoreMedium == 10 ){
                            /**afficher bravo ! */
                            console.log('Bravo');
                        }
                    }
                }
                /* tableau des items */
                //const listItems = ["hippocampe", "coeur", "abeille", "ancre", "longue vue", "glace", "sac", "slime", "locomotive", "cloche"];
            });
        }
    }

//image 3
    let itemHard = document.getElementsByClassName('hard');
    let scoreHard = 0;
    for (const i in itemHard) {
        if (Object.hasOwnProperty.call(itemHard, i)) {
            let ele = itemHard[i];
            /** elem clické je recup attribut name je vais dans la listSpan et je raye le span qui a le meme name ! */
            ele.addEventListener('click', () => {
                let itemName = ele.getAttribute("name");
                /* comparer l elem clické avec le span qui porte son nom et rayé*/
                let listSpan = document.getElementsByTagName('span');
                for (const key in listSpan) {
                    if (Object.hasOwnProperty.call(listSpan, key)) {
                        let spanItem = listSpan[key];
                        if (spanItem.getAttribute('name') == ele.getAttribute("name") && spanItem.style.textDecoration !== 'line-through') {
                            spanItem.style.textDecoration = 'line-through';
                            /* calculer le score et enlever les elements du tableau listItems */
                            scoreHard = scoreHard +1;
                            document.getElementById('score').innerHTML = 'Score : ' + scoreHard + '/10';
                        }
                        else if (scoreHard == 10 ){
                            /**afficher bravo ! */
                            console.log('Bravo');
                        }
                    }
                }
                /* tableau des items */
                //const listItems = ["hippocampe", "coeur", "abeille", "ancre", "longue vue", "glace", "sac", "slime", "locomotive", "cloche"];
            });
        }
    }
};

