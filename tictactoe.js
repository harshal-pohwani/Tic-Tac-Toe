let i = 0;
let a = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
function tac(n) {
    switch (n) {
        case 1:
            if (i % 2 == 0) {
                document.getElementById("b1").innerHTML = "X";
                document.getElementById("b1").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[0] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b1").innerHTML = "O";
                document.getElementById("b1").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[0] = 3;
            }
            i++;
            break;
        case 2:
            if (i % 2 == 0) {
                document.getElementById("b2").innerHTML = "X";
                document.getElementById("b2").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[1] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b2").innerHTML = "O";
                document.getElementById("b2").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[1] = 3;
            }
            i++;
            break;
        case 3:
            if (i % 2 == 0) {
                document.getElementById("b3").innerHTML = "X";
                document.getElementById("b3").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[2] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b3").innerHTML = "O";
                document.getElementById("b3").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[2] = 3;
            }
            i++;
            break;
        case 4:
            if (i % 2 == 0) {
                document.getElementById("b4").innerHTML = "X";
                document.getElementById("b4").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[3] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b4").innerHTML = "O";
                document.getElementById("b4").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[3] = 3;
            }
            i++;
            break;
        case 5:
            if (i % 2 == 0) {
                document.getElementById("b5").innerHTML = "X";
                document.getElementById("b5").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[4] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b5").innerHTML = "O";
                document.getElementById("b5").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[4] = 3;
            }
            i++;
            break;
        case 6:
            if (i % 2 == 0) {
                document.getElementById("b6").innerHTML = "X";
                document.getElementById("b6").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[5] = 2;
            }
            else {
                document.getElementById("b6").innerHTML = "O";
                document.getElementById("b6").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[5] = 3;
            }
            i++;
            break;
        case 7:
            if (i % 2 == 0) {
                document.getElementById("b7").innerHTML = "X";
                document.getElementById("b7").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[6] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b7").innerHTML = "O";
                document.getElementById("b7").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[6] = 3;
            }
            i++;
            break;
        case 8:
            if (i % 2 == 0) {
                document.getElementById("b8").innerHTML = "X";
                document.getElementById("b8").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[7] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b8").innerHTML = "O";
                document.getElementById("b8").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[7] = 3;
            }
            i++;
            break;
        case 9:
            if (i % 2 == 0) {
                document.getElementById("b9").innerHTML = "X";
                document.getElementById("b9").style.textShadow = "5px 5px 5px rgba(93,4,123,255)";
                a[8] = 2;
            }
            else if (i % 2 != 0) {
                document.getElementById("b9").innerHTML = "O";
                document.getElementById("b9").style.textShadow = "5px 5px 5px rgba(8,72,99,255)";
                a[8] = 3;
            }
            i++;
            break;
    }

    if ((a[0] == 2 && a[1] == 2 && a[2] == 2) || (a[3] == 2 && a[4] == 2 && a[5] == 2) || (a[6] == 2 && a[7] == 2 && a[8] == 2) || (a[0] == 2 && a[3] == 2 && a[6] == 2) || (a[1] == 2 && a[4] == 2 && a[7] == 2) || (a[2] == 2 && a[5] == 2 && a[8] == 2) || (a[0] == 2 && a[4] == 2 && a[8] == 2) || (a[2] == 2 && a[4] == 2 && a[6] == 2)) {
        document.getElementById("msg").innerHTML = "player one wins!!";
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").style.background = "linear-gradient(rgba(7,8,28,255),rgba(93,4,123,255))";
    }
    else if ((a[0] == 3 && a[1] == 3 && a[2] == 3) || (a[3] == 3 && a[4] == 3 && a[5] == 3) || (a[6] == 3 && a[7] == 3 && a[8] == 3) || (a[0] == 3 && a[3] == 3 && a[6] == 3) || (a[1] == 3 && a[4] == 3 && a[7] == 3) || (a[2] == 3 && a[5] == 3 && a[8] == 3) || (a[0] == 3 && a[4] == 3 && a[8] == 3) || (a[2] == 3 && a[4] == 3 && a[6] == 3)) {
        document.getElementById("msg").innerHTML = "player two wins!!";
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").style.background = "linear-gradient(rgba(3,4,6,255),rgba(8,72,99,255))";
    }
}
