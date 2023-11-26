function dispFb() {
  var PageUrl = "https://www.facebook.com/ckmpravasi";
  
  window.location.href = PageUrl;
}

function dispInsta() {
  var PageUrl = "https://www.instagram.com/ckmpravasi/";
  
  window.location.href = PageUrl;
}

function dispTwi() {
  var PageUrl = "https://twitter.com/ckmpravasi";
  
  window.location.href = PageUrl;
}

function dispYT() {
  var PageUrl = "https://www.youtube.com/channel/UCriHCAOyMTW31AtJ2-KyNIA";
  
  window.location.href = PageUrl;
}


function funcSubmit() {
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("mail")[0].value;
  var contactNumber = document.getElementsByName("contact")[0].value;
  var message = document.getElementsByName("message")[0].value;

  if (name && email && contactNumber && message) {
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact Number: " + contactNumber);
    console.log("Message: " + message);

    alert("Submitted");

  } else {
    alert("Please fill in all fields");
  }
}


function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("read-more-text");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }