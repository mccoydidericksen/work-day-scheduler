$(function () {
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd[,] MMMM D"));
  var saveButtonEl = $(".btn");
  var scheduleContent = JSON.parse(localStorage.getItem("scheduleContent"));
  
  function displayScheduleContent(){
    if(scheduleContent){
      var keys = Object.keys(scheduleContent);
      for(var i=0; i<keys.length; i++){
        var timeEl = $($("#"+keys[i]).children()[1]);
        timeEl.text(scheduleContent[keys[i]]);
      }
    }
  }

  displayScheduleContent();

  saveButtonEl.on("click", function(e){
    var parentId = $(e.target).parents()[0].id;
    var userContent = $($(e.target).siblings()[1]).val();
    if(scheduleContent){
      scheduleContent[parentId] = userContent;
    }
    else{
      scheduleContent = {};
      scheduleContent[parentId] = userContent;
    }
    localStorage.setItem("scheduleContent", JSON.stringify(scheduleContent));
    displayScheduleContent();
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
