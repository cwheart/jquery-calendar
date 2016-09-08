"use strict";

(($) ->
  $.fn.calendar = (options) ->
    this.initDate = new Date()
    this.element = $(this)
    this.dayList = $(this).find(".calendar-list")
    this.nav = $(this).find(".calendar-nav")
    this.title = $(this).find(".calendar-title")
    this.days = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
    this.getDayStr = (day)->
      day = 7 if day == 0
      this.days[day - 1]

    obj = this
    this.nextMonth = ->
      this.initDate.setMonth(this.initDate.getMonth() + 1)
      this.draw()
    this.prevMonth = ->
      this.initDate.setMonth(this.initDate.getMonth() - 1)
      this.draw()
    # 日历绘制
    this.draw = ->
      this.drawTitle()
      this.drawNav()
      this.drawList()
    # 绘制标题
    # 星期一 星期二 星期三...
    this.drawTitle = ->
      $(this.title).empty()
      for day in this.days
        $(this.title).append("<div>" + day + "</div>")
    this.drawList = ->
      tmp = new Date(this.initDate)
      tmp.setDate(1)
      day = tmp.getDay()
      day = 7 if day == 0
      tmp.setDate(1-day)
      $(this.dayList).empty()
      while 1
        tmp.setDate(tmp.getDate() + 1)
        day = $("<div class=\"cal-cell\"></div>")
        day.addClass("current") if tmp.toDateString() == this.initDate.toDateString()
        day.append("<a data-date=\"" + tmp.toDateString() + "\" class=\"day-cell\" href=\"javascript:void(0);\">"+ tmp.getDate +"</a>")
        $(this.dayList).append(day)
        break if (tmp.getFullYear() > this.initDate.getFullYear() || tmp.getMonth() > this.initDate.getMonth()) && tmp.getDay() == 0
    # 绘制导航
    this.drawNav = ->
      $(this.nav).empty()
      selectedMonth = $("<h2></h2>")
      $(this.nav).append(selectedMonth)
      selectedMonth.append("<span class=\"prevMonth\"><a href=\"javascript:void(0);\">&lt;</a></span>")
      selectedMonth.append("<label>" + this.initDate.getFullYear() + "年 " + (this.initDate.getMonth() + 1) + "月</label>")
      selectedMonth.append("<span class=\"nextMonth\"><a href=\"javascript:void(0);\">&gt;</a></span>")
      selectedDate = $("<div class=\"selected-date\"></div>")
      $(this.nav).append(selectedDate)
      selectedDate.text(this.initDate.getDate())
      selectedDay = $("<div class=\"selected-day\">" + this.getDayStr(this.initDate.getDay()) + "</div>")
      $(this.nav).append(selectedDay)
      
    # 选择日期
    # date like '2015-11-11'
    this.selectDate = (selectedDate) ->
      date = new Date(selectedDate)
      this.initDate.setYear(date.getFullYear())
      this.initDate.setMonth(date.getMonth())
      this.initDate.setDate(date.getDate())
      this.draw()

    this.draw()
    $(this).on "click", ".nextMonth", ->
      obj.nextMonth()
    $(this).on "click", ".prevMonth", ->
      obj.prevMonth()
    $(this).on "click", ".day-cell", ->
      obj.selectDate($(this).attr("data-date"))
    obj
)(jQuery)