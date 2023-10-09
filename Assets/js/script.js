// All code wrapped in a function to ensure the code will only run after the page is loaded with all it's elements.

$(function () {
  // Event listener for when the Save Button is clicked
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, eventText);
  });

  // Applies 'past', 'present', and 'future' classes to the '.time-block' based on the hour (H = 0-23	The hour)
  var currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Gets the '.time-block' and then gets it's id using the 'timeBlockId'.
  // Based on the id it gets that storage value from the localStorage and saves it to it's corresponding time-block.
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);
    if (savedEvent !== null) {
      $(this).find(".description").val(savedEvent);
    }
  });

  // Will display the current date in (Name of week, Full month name + day#, Four digit year)
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
