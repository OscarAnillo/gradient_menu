function toggleMenu(){
  let grab = document.querySelector('#uList');
  if(grab.style.display === "block"){
    grab.style.display = "none";
  } else {
    grab.style.display = "block";
  }
}

toggleMenu();
