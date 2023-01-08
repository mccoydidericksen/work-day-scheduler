$(function () {
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd[,] MMMM D"));
  var saveButtonEl = $(".btn");
  var scheduleContent = JSON.parse(localStorage.getItem("scheduleContent"));

  var currentHour = dayjs().format("H");
  for(var i=9; i<18; i++){
    var timeBlockEl = $("#hour-"+i);
    if(i<currentHour){
      timeBlockEl.addClass("past");
    }
    else if(i>currentHour){
      timeBlockEl.addClass("future");
    }
    else{
      timeBlockEl.addClass("present");
    }

  }

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

});
