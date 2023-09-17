document.getElementById("ch").onchange = function () {
    if (document.getElementById("ch").checked) {
        document.getElementById("pass").removeAttribute("type");
        document.getElementById("pass").setAttribute("type", "text");
    }
    else {
        document.getElementById("pass").removeAttribute("type");
        document.getElementById("pass").setAttribute("type", "password");
    }
}

document.getElementById("on").onclick = function () {
    document.getElementById("on").style.visibility = "hidden";
    document.getElementById("off").style.visibility = "visible";

    document.getElementById("title").style.color = " #fff";
    document.getElementById("title").style.textShadow = "none";

    document.getElementById("email").style.color = "none";
    document.getElementById("email").style.borderBottomColor = "#fff";
    document.getElementById("email").style.boxShadow = "none";

    document.getElementById("pass").style.color = "none";
    document.getElementById("pass").style.borderBottomColor = "#fff";
    document.getElementById("pass").style.boxShadow = "none";

    document.getElementById("a").style.color = "#fff";
    document.getElementById("a").style.textShadow = "none";

    document.getElementById("p").style.color = "#fff";
    document.getElementById("p").style.textShadow = "none";

    document.getElementById("label").style.color = "#fff";
    document.getElementById("label").style.textShadow = "none";

    document.getElementById("btn").style.backgroundColor = "#fff";
    document.getElementById("btn").style.boxShadow = "none";

}
document.getElementById("off").onclick = function () {
    document.getElementById("off").style.visibility = "hidden";
    document.getElementById("on").style.visibility = "visible";

    document.getElementById("title").style.color = " #00800f";
    document.getElementById("title").style.textShadow = "0px 0px 40px #00800f";

    document.getElementById("email").style.color = "#00800f";
    document.getElementById("email").style.borderBottomColor = "#00800f";
    document.getElementById("email").style.boxShadow = "0px 5px 20px #00800f";

    document.getElementById("pass").style.color = "#00800f";
    document.getElementById("pass").style.borderBottomColor = "#00800f";
    document.getElementById("pass").style.boxShadow = "0px 5px 20px #00800f";


    document.getElementById("a").style.color = "#00800f";
    document.getElementById("a").style.textShadow = "0px 0px 20px #fff";

    document.getElementById("p").style.color = "#00800f";
    document.getElementById("p").style.textShadow = "0px 0px 20px #fff";

    document.getElementById("label").style.color = "#00800f";
    document.getElementById("label").style.textShadow = "0px 0px 20px #fff";

    document.getElementById("btn").style.backgroundColor = "#00800f";
    document.getElementById("btn").style.boxShadow = "0px 0px 20px #00800f";
}