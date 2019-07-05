




function start(e) {
    var name = [
        {
            char: '蕭',
            big5: 'BFBD',
            cns:  '1-7227',
            unicode: '856D'
        },
        {
            char: '琮',
            big5: 'DA7A',
            cns:  '2-3D7E',
            unicode: '742E'
        },
        {
            char: '敬',
            big5: 'B771',
            cns:  '1-6439',
            unicode: '656C'
        }
    ];

    var ele = document.getElementById("div1");

    for (var i = 0; i < 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}
window.addEventListener("load",start,false);