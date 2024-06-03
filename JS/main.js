let showData = document.querySelector(".continue");
showData.addEventListener("click", () => {
  document.querySelector(".first").classList.toggle("show");
  document.querySelector(".click").classList.toggle("bottom");
  showData.classList.toggle("change");
  changeData()
});
function changeData(){
    if (showData.classList.contains("change")) {
        document.querySelector(".continue").innerHTML = `up <span class="fa fa-angle-up"></span>`;
      }else{
        document.querySelector(".continue").innerHTML = `continue <span class="fa fa-angle-down"></span>`;
      }
}