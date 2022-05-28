function sendd()
{
    var word1 = document.getElementById("word").value;
    newword = word1.toLowerCase();

    c1 = newword.charAt(1);

    n1 = Math.floor(newword.length/2);
    c2 = newword.charAt(n1);
    
    n2 = newword.length - 1;
    c3 = newword.charAt(n2);

    r1 = newword.replace(c1," _ ");
    r2 = r1.replace(c2," _ ");
    r3 = r2.replace(c3," _ ")
    console.log(r3)
    row1 = "<h4>Q. "+r3+"</h4>"
    row2 = "<h5>Answer : <input id='player_answer' type='text' class='form-control'></h5>"
    row3 = "<button onclick='playercheck()' class='btn btn-success'>Check</button>"
    var display = row1+row2+row3;
    document.getElementById("output").innerHTML = display;
    document.getElementById("word").value = "";
}
var p1name = localStorage.getItem("player1");
var p1score = 0;
var p2name = localStorage.getItem("player2");
var p2score = 0;
document.getElementById("p1name").innerHTML = p1name + " : ";
document.getElementById("p1score").innerHTML = p1score;
document.getElementById("p2name").innerHTML = p2name + " : ";
document.getElementById("p2score").innerHTML = p2score;
document.getElementById("qt").innerHTML = "Question Turn - " + p1name;
document.getElementById("at").innerHTML = "Answer Turn - " + p2name;
var qt = "p1";
var at = "p2";
function playercheck()
{
    uc = document.getElementById("player_answer").value;
    user_check = uc.toLowerCase()
    if(user_check == newword)
    {
        if(at == "p1")
        {
            p1score = p1score+1;
            document.getElementById("p1score").innerHTML = p1score;
        }
        else if(at == "p2")
        {
            p2score = p2score+1;
            document.getElementById("p2score").innerHTML = p2score;
        }
    }
    if(qt == "p1")
    {
        qt = "p2";
        document.getElementById("qt").innerHTML = "Question Turn - " + p2name;
    }
    else if(qt == "p2")
    {
        qt = "p1";
        document.getElementById("qt").innerHTML = "Question Turn - " + p1name;
    }
    if(at == "p1")
    {
        at = "p2";
        document.getElementById("at").innerHTML = "Answer Turn - " + p2name;
    }
    else if(at == "p2")
    {
        at = "p1";
        document.getElementById("at").innerHTML = "Answer Turn - " + p1name;
    }
    document.getElementById("output").innerHTML = "";
}