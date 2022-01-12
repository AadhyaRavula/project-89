function add_user()
{
    player1_name = document.getElementById("Player1_nameInput");
    player2_name = document.getElementById("Player2_nameInput");
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
}