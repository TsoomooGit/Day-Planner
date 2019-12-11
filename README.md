# Day-Planner
My application is a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The application displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contain the following:

* The time

* A field to hold user input

* A save button

Clicking on the save button will store the time and user input in `localStorage`.
When user reloads the application, saved meetings will be displayed.


Near the top of the calendar, the application displays the current day. Additionally, each hour color coded to reflect whether the time slot is in the past(grey), the present(red), or the future(green). This changes depending on the time of day.
