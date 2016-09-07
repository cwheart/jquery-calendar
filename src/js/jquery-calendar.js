"use strict";
(function($) {
  return $.fn.calendar = function(options) {
    this.initDate = new Date();
    this.element = $(this);
    this.dayList = $(this).find(".list");
    this.nav = $(this).find(".nav");
    this.nextMonth = function() {
      this.initDate.setMonth(this.initDate.getMonth() + 1);
      return this.draw();
    };
    this.prevMonth = function() {
      this.initDate.setMonth(this.initDate.getMonth() - 1);
      return this.draw();
    };
    this.draw = function() {
      this.drawNav();
      return this.drawList();
    };
    this.drawList = function() {
      var day, results, tmp;
      tmp = new Date(this.initDate);
      tmp.setDate(1);
      day = tmp.getDay();
      if (day === 0) {
        day = 7;
      }
      tmp.setDate(1 - day);
      $(this.dayList).empty();
      results = [];
      while (1) {
        tmp.setDate(tmp.getDate() + 1);
        $(this.dayList).append("<div>" + tmp.getDate(+"</div>"));
        if (tmp.getMonth() > this.initDate.getMonth() && tmp.getDay() === 0) {
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    this.drawNav = function() {
      return console.log("Hehehe......");
    };
    this.selectDate = function(selectedDate) {
      var date;
      date = new Date(selectedDate);
      this.initDate.setYear(date.getFullYear());
      this.initDate.setMonth(date.getMonth());
      this.initDate.setDate(date.getDate());
      return this.draw();
    };
    this.draw();
    $(this).on("click", ".nextMonth", function() {
      return this.nextMonth();
    });
    $(this).on("click", ".prevMonth", function() {
      return this.prevMonth();
    });
    return this;
  };
})(jQuery);
