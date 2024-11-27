$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: 'Orientation Week',
                start: '2024-12-01',
                end: '2024-12-07'
            },
            {
                title: 'Final Exams',
                start: '2024-12-10',
                end: '2024-12-14'
            },
            {
                title: 'Christmas Break',
                start: '2024-12-20',
                end: '2024-12-25'
            }
        ],
        editable: true, // Allows dragging and editing of events
        droppable: true, // Allows events to be dragged into the calendar
        eventRender: function(event, element) {
            // Customizing the display of event titles
            element.css('background-color', '#2980b9');
            element.css('color', '#ecf0f1');
        }
    });
});
