"use strict";

(($) ->
  $.fn.calendar = (options) ->
    this.initDate = new Date()
    this.element = $(this)
    this.dayList = $(this).find(".calendar-list")
    this.nav = $(this).find(".calendar-nav")
    this.title = $(this).find(".calendar-title")
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
      for day in ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
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
        $(this.dayList).append("<div class=\"cal-cell\">"+ tmp.getDate +"</div>")
        break if tmp.getMonth() > this.initDate.getMonth() && tmp.getDay() == 0
    # 绘制导航
    this.drawNav = ->
      $(this.nav).empty()
      $(this.nav).append("<h1><span class=\"prevMonth\">&lt;</span><span class=\"nextMonth\">&gt;</span></h1>")
      
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
      this.nextMonth()
    $(this).on "click", ".prevMonth", ->
      this.prevMonth()
    this
)(jQuery)