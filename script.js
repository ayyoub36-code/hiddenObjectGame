window.onload = (e) => {
    console.log("page is fully loaded");

    function update(e) {
        let x = e.clientX + window.pageXOffset;
        let y = e.clientY + window.pageYOffset;
        console.log("x=" + x + " y=" + y);
    }
    /* find item */
    let item1 = document.getElementById('easy_01_id');
    item1.addEventListener('click', () => {
        console.log("j'ai trouvé 01 !")
    })

let objects_2 = ["hippocampe", "coeur", "abeille", "ancre", "longue vue", "glace", "sac", "slime", "locomotive", "cloche"];

document.getElementById('easy_02_id').addEventListener('click', function(){console.log('trouvé');});






};

