"use strict";
(function($) {
  return $.fn.calendar = function(options) {
    var obj;
    this.initDate = new Date();
    this.element = $(this);
    this.dayList = $(this).find(".calendar-list");
    this.nav = $(this).find(".calendar-nav");
    this.title = $(this).find(".calendar-title");
    this.days = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    this.getDayStr = function(day) {
      if (day === 0) {
        day = 7;
      }
      return this.days[day - 1];
    };
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
      ref = this.days;
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
        day = $("<div class=\"cal-cell\"></div>");
        if (tmp.toDateString() === this.initDate.toDateString()) {
          day.addClass("current");
        }
        day.append("<a data-date=\"" + tmp.toDateString() + "\" class=\"day-cell\" href=\"javascript:void(0);\">" + tmp.getDate(+"</a>"));
        $(this.dayList).append(day);
        if ((tmp.getFullYear() > this.initDate.getFullYear() || tmp.getMonth() > this.initDate.getMonth()) && tmp.getDay() === 0) {
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    };
    this.drawNav = function() {
      var selectedDate, selectedDay, selectedMonth;
      $(this.nav).empty();
      selectedMonth = $("<h2></h2>");
      $(this.nav).append(selectedMonth);
      selectedMonth.append("<span class=\"prevMonth\"><a href=\"javascript:void(0);\">&lt;</a></span>");
      selectedMonth.append("<label>" + this.initDate.getFullYear() + "年 " + (this.initDate.getMonth() + 1) + "月</label>");
      selectedMonth.append("<span class=\"nextMonth\"><a href=\"javascript:void(0);\">&gt;</a></span>");
      selectedDate = $("<div class=\"selected-date\"></div>");
      $(this.nav).append(selectedDate);
      selectedDate.text(this.initDate.getDate());
      selectedDay = $("<div class=\"selected-day\">" + this.getDayStr(this.initDate.getDay()) + "</div>");
      return $(this.nav).append(selectedDay);
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
    $(this).on("click", ".day-cell", function() {
      return obj.selectDate($(this).attr("data-date"));
    });
    return obj;
  };
})(jQuery);
