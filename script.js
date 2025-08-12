document.addEventListener("DOMContentLoaded", function () {
  let timezoneData = document.querySelector("#countries");
  function showTimezones(event) {
    const selectedValue = event.target.value;
    alert(selectedValue);

    if (selectedValue === "china") {
      let chinaTime = moment
        .tz("Asia/Shanghai")
        .format("dddd, MMMM D, YYYY h:mm A z");
      alert(`It is ${chinaTime} in China`);
    }
    if (selectedValue === "south africa") {
      let southAfricaTime = moment
        .tz("Africa/Johannesburg")
        .format("dddd, MMMM D, YYYY h:mm A z");
      alert(`It is ${southAfricaTime} in South Africa`);
    }
    if (selectedValue === "united kingdom") {
      let ukTime = moment
        .tz("Europe/London")
        .format("dddd, MMMM D, YYYY h:mm A z");
      alert(`It is ${ukTime} in the United Kingdom`);
    }
  }
  timezoneData.addEventListener("change", showTimezones);
});
