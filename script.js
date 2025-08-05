function showTimezones() {
  alert("Hello, world!");
  let timezoneData = document.querySelector("#countries");
  timezoneData.addEventListener("change", showTimezones);
}
