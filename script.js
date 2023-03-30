window.onload = (e) => {
    console.log("page is fully loaded");

    let firstDiv = document.getElementById('first_picture');
    firstDiv.addEventListener('click', () => {
        console.log("j'ai clické !")
    })

    function update(e) {
        let x = e.clientX + window.pageXOffset;
        let y = e.clientY + window.pageYOffset;
        console.log("x=" + x + " y=" + y);
    }

    firstDiv.onclick = update;

    /* find item */
    let item1 = document.getElementById('easy_01_id');
    item1.addEventListener('click', () => {
        console.log("j'ai trouvé 01 !")
    })

};

