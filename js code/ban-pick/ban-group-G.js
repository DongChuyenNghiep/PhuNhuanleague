function banpickG(){
    let SHEET_TITLE_BAN_G = 'Group G'
    let SHEET_RANGE = 'H3:I133';
    let SHEET_ID = '1yhQbcmnQB52fu1PqlHPRNWOHmJwddS8J9EpIQqvJx2o';
    
    let FULL_URL_G = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_BAN_G}&range=${SHEET_RANGE}`;

    fetch(FULL_URL_G)
        .then((res) => res.text())
        .then((rep) => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let pickbox = document.querySelectorAll('.pick-box-G');
            let banBoxes = document.querySelectorAll('.ban-box-G'); // Select all elements with the class 'ban-box'
            for (let i = 0; i < data.table.rows.length; i++) {
                let rowData = data.table.rows[i].c;
                let imgElement = banBoxes[i].querySelector('img'); // Select the img inside the specific '.ban-box'
                let pickimgElement = pickbox[i].querySelector('img');
                if (imgElement) {
                    imgElement.src = 'heroes/' + rowData[0].v + '.webp'; // Assuming the 'v' property is at index 0
                    pickimgElement.src = 'heroes/' + rowData[1].v + '.webp'; // Assuming the 'v' property is at index 0
                }
            }


        });
}