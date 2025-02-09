document.getElementById("loginform").addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    const adminusername="admin";
    const adminpassword="password123";
    if(username==adminusername && password==adminpassword){
        localStorage.setItem("adminLoggedIn","true");
        window.location.href="dash.html";
    }
    else{
        document.getElementById("error-message").textContent="Invalid username and password";
    }
});