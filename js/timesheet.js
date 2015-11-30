;
(function($) {
    'use strict';
    var canvas = {
        drawLine: function(event) {
            //console.log('draw the line for respective data as follows');
            Object.keys(event).forEach(function(key) {
                // console.log(key + '::' + event[key]);
            });
        }
    };

    var methods = {
        setTheme: function(theme) {
            switch (theme) {
                case 'default':
                    console.log('default theme is set here');
                    break;
                case 'theme1':
                    console.log('theme one goes here');
                    //$('#timesheet-default').css("background-color", "#000");
                    break;
                default:
                    console.log('no theme set here');
            }
        },
        setTime: function(options) {
            $.each(options, function(key, value) {
                $('.scale').append('<section>' + value + '</section');
            });
        },
        drawEventChart: function(options) {
            var events = options.event;
            $.each(events, function(key, value) {
                var startDate = value.startDate.split("/");
                var endDate = value.endDate.split("/");
                var left = ((startDate[1] - 2002) * 100) + startDate[0] * 8.333333333333333 + "px";

                if (startDate[0] == 0 && endDate[0] == 0) {
                    var width = (((endDate[1] - startDate[1]) + 1) * 100) + "px";//when month=0
                } else {
                    var width = (((endDate[1] - startDate[1])) * 100) + endDate[0] * 8.333333333333333 + "px";
                }
                var bgColor = getColor();
                $('ul.data').append(
                        '<li>\n\
                        <a class="bubble" style="margin-left:' + left + ';width:' + width + ';background-color:' + bgColor + '"></a>\n\
                        <span class="info" style="left:'+width+'">' + value.title + ' (' + value.startDate + ' - ' + value.endDate + ')</span>\n\
                        </li>'
                        );
            });
        }
    }

    //generate random color
    function getColor() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }

    $.fn.timeSheet = function(options) {
        var defaults = {
            theme: 'default',
            type: 'default', //year, month, week, day
            height: 500,
            width: 720
        };
        var options = $.extend(defaults, options);
        canvas.drawLine(options);
        methods.setTheme(options.theme);
        methods.setTime(options.months);
        methods.drawEventChart(options);
    };
})(jQuery)