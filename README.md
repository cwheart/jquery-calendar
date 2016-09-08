# jquery-calendar

## Demo

![Demo](https://raw.githubusercontent.com/cwheart/jquery-calendar/master/images/20160908-182116_capture.gif)

## Install

### bower

```shell
bower install git@github.com:cwheart/jquery-calendar.git
```

### npm

```
npm install jquery-calendar
```

## USAGE

```html
<link rel="stylesheet" href="./bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="./bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="./bower_components/jquery-calendar/dist/css/jquery-calendar.min.css">

<div class="row">
  <div id="calendar" class="calendar row">
    <div class="calendar-body col-md-8">
      <div class="calendar-title"></div>
      <div class="calendar-list"></div>
    </div>
    <div class="calendar-nav col-md-4"></div>
  </div>
</div>
  
<script src="./bower_components/jquery-calendar/dist/js/jquery-calendar.min.js"></script>
<script>
$(function() {
  $("#calendar").calendar();
});
</script>
```
