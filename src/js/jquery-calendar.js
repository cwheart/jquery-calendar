"use strict";
(function($) {
  return $.fn.calendar = function(options) {
    var obj;
    this.initDate = new Date();
    this.element = $(this);
    this.dayList = $(this).find(".calendar-list");
    this.nav = $(this).find(".calendar-nav");
    this.title = $(this).find(".calendar-title");
    obj = this;
    this.nextMonth = function() {
      this.initDate.setMonth(this.initDate.getMonth() + 1);
      return this.draw();
    };
    this.prevMonth = function() {
      this.initDate.setMonth(this.initDate.getMonth() - 1);
      return this.draw();
    };
    this.draw = function() {
      this.drawTitle();
      this.drawNav();
      return this.drawList();
    };
    this.drawTitle = function() {
      var day, i, len, ref, results;
      $(this.title).empty();
      ref = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        day = ref[i];
        results.push($(this.title).append("<div>" + day + "</div>"));
      }
      return results;
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
        $(this.dayList).append("<div class=\"cal-cell\">" + tmp.getDate(+"</div>"));
        if (tmp.getMonth() > this.initDate.getMonth() && tmp.getDay() === 0) {
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    this.drawNav = function() {
      $(this.nav).empty();
      return $(this.nav).append("<h1><span class=\"prevMonth\">&lt;</span><span class=\"nextMonth\">&gt;</span></h1>");
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
      return obj.nextMonth();
    });
    $(this).on("click", ".prevMonth", function() {
      return obj.prevMonth();
    });
    return obj;
  };
})(jQuery);
