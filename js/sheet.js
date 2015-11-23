(function($) {
    $.fn.timeSheet = function(ctx, data) {
        ctx.fillStyle = '#fff';
        ctx.font = '14px Calibri';

        drawHorizontalLine(ctx);//draw horizontal line
        drawVerticalLine(ctx);//draw vertical line
        markLabelHorizontal(ctx, data); //make a mark on every 100 point horizontally

        var points = data.dataset;
        var count = 0;
        $.each(points, function() {
            count++;
        });

        for (var i = 1; i <= count; i++) {
            var plotPoint = points['year' + i];
            var start = plotPoint.start;
            var end = plotPoint.end;
            var start = (start - 2001) * 100;

            var end = ((end - 2001) * 100) + 100;
            ctx.beginPath();
            ctx.moveTo(start + 5, 80 * i);
            ctx.lineTo(end - 5, 80 * i);
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.strokeStyle = getColor();
            ctx.stroke();
        }
    }
    /**
     * draw horizontal line
     * @param ctx
     */
    function drawHorizontalLine(ctx) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(700, 0);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }

    /**
     * draw horizontal line
     * @param ctx
     */
    function drawVerticalLine(ctx) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 500);
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    /**
     * @param ctx
     * @param object data
     */
    function markLabelHorizontal(ctx, data) {
        ctx.setLineDash([1, 1]);
        var label = $.makeArray(data.labelx);
        $.each(label, function(index, value) {
            ctx.beginPath();
            ctx.moveTo((index * 100) + 100, 0);
            ctx.lineTo((index + 1) * 100, 500);
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(index * 100, 0);
            ctx.lineTo((index + 1) * 100, 0)
            ctx.fillText(value, (index * 100) + 35, 30);
        });
    }

    //generate random color
    function getColor() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }

}(jQuery));