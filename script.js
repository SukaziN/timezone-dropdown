document.addEventListener("DOMContentLoaded", function () {
  let timezoneData = document.querySelector("#countries");
  function showTimezones() {
    alert("Hello, world!");
  }
  timezoneData.addEventListener("change", showTimezones);
});
