function addUser() {
    Username = document.getElementById("User_Name").value;
    localStorage.setItem("User_name",Username);
    window.location = "kwitter_room.html";
}