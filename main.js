function login()
{
    var p1name = document.getElementById("p1").value;
    var p2name = document.getElementById("p2").value;

    localStorage.setItem("player1",p1name);
    localStorage.setItem("player2",p2name);
    window.location = "game_page.html"
}