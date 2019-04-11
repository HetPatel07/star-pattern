var i = 0;

for (i = 0; i < 3; i++) {
    for (j = 0; j <= i; j++) {
        var span = document.createElement('span');

        document.getElementsByClassName('stars')[0].appendChild(span);

        document.getElementsByTagName('span')[j].innerHTML = '<i class="star fas fa-star"></i>';
        console.log(document.getElementsByClassName('stars')[0].lastChild);

        if (j == i) {
            document.getElementsByTagName('span')[i] = '<i class="star fas fa-star"></i><br />';
        }
    }


}
