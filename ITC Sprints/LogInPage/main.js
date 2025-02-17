const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container"); // hadoume les 3 ghir bch yfonxionniw lres boutons t3 l'inscription f login 

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});  // hadouma les deux ghir bch yssraw les effects t3 sign in w sign up



//fonction bch tbouji ll la 2eme page (User Interface)
function UserSubmit() {
  // Redirect to the desired URL
  window.location.href = '../User/User.html';
  // Prevent the form from actually submitting
  return false;//
}

//fonction bch tbouji ll la 2eme page (Admin Interface)
function AdminSubmit() {
  // Redirect to the desired URL
  window.location.href = '../Admin/Admin.html';
  // Prevent the form from actually submitting
  return false;
}


//Logo Animation
document.getElementById("sign-up-btn").addEventListener("click", function() {
  document.getElementById("logoo").classList.toggle("move");
});
  //  //Gooing Back Animation
   document.getElementById("sign-in-btn").addEventListener('click',function(){
    document.getElementById('logoo').classList.toggle('move');
   });





//After Login Alert (Admin And User)(Mistake)
document.getElementById("loginBtn").addEventListener("click", function() {
  Swal.fire({
      title: "Wait A Sec...!",
      text: "You Didn't Fill All The Inputs.(Admin Only)",
      icon: "error",
      confirmButtonText: "Try Again",
      timer:2000,
  });
});



// Admin Configuration

function AdminSubmit() {
  const admins = [
      { username: "Houssem", password: "houssem123" },
      { username: "Manar", password: "manar456" },
  ];
  const username = document.querySelector('.sign-in-form input[type="text"]').value;
  const password = document.querySelector('.sign-in-form input[type="password"]').value;
  const isAdmin = admins.some(admin => admin.username === username && admin.password === password);
  
  if (isAdmin) {
      window.location.href = "../Admin/Admin.html"; 
      return false; 
  } else {
    Swal.fire({
      title: "You Are Not An Admin...!",
      text: "False Adress Or Password",
      icon: "error",
      confirmButtonText: "Try Again",
      timer:5000,
  });
      return false;
  }
}
