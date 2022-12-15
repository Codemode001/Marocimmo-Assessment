function changeTabs(event) {
  let tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" change-tabs", "");
  }
  event.target.classList.add("change-tabs");
  //   console.log(event.currentTarget);
}
