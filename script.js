window.onload = (e) => {
    console.log("page is fully loaded");
    /* find item */
    let item1 = document.getElementById('easy_01_id');
    item1.addEventListener('click', () => {
        console.log("j'ai trouvé 01 !")
    })

    /* tableau items les noms des items à trouver*/
    let items = document.getElementsByClassName('easy_01');
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
                            spanItem.style.textDecoration = 'line-through';
                            /* calculer le score et enlever les elements du tableau listItems */
                            score = score +1;
                            document.getElementById('score').innerHTML = 'Score : ' + score + '/10';
                        }
                        else if (score == 10 ){
                            /**afficher bravo ! */
                            console.log('Bravo');
                        }
                    }
                }

                /* tableau des items */
                const listItems = ['baguette', 'pigeon', 'couteau', 'peau_banane', 'papillon_vert', 'ketchup', 'donat', 'coquillage', 'cloche', 'glace'];
            })
        }
    }




let objects_2 = ["hippocampe", "coeur", "abeille", "ancre", "longue vue", "glace", "sac", "slime", "locomotive", "cloche"];

document.getElementById('easy_02_id').addEventListener('click', function(){console.log('trouvé');});






};

