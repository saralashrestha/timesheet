;
(function($) {
    "use strict";
    $(document).ready(function() {
        var data = {
            theme: 'theme1',
            animation: true,
            height: 500,
            months: ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"],
            event: {
                event1: {
                    title: 'Javascript',
                    startDate: '0/2002',
                    endDate: '0/2002'
                },
                event2: {
                    title: 'CSS',
                    startDate: '06/2002',
                    endDate: '09/2003'
                },
                event3: {
                    title: 'ROR',
                    startDate: '0/2003',
                    endDate: '0/2003'
                },
                event4: {
                    title: 'Java',
                    startDate: '0/2004',
                    endDate: '05/2006'
                },
//                event5: {
//                    title: 'Grails',
//                    startDate: '9',
//                    endDate: '10'
//                },
//                event6: {
//                    title: 'PHP',
//                    startDate: '10',
//                    endDate: '11'
//                },
//                event7: {
//                    title: 'Anroid',
//                    startDate: '3',
//                    endDate: '5'
//                }
            }
        }
        console.log(data);
        $('#timesheet-default').timeSheet(data);
    });
})(jQuery);