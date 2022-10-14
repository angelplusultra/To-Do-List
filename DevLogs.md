
Dev Log 10/10/2022

Currently figuring out a solution in order to work with tailwind styling and run a nodemon server at the same time, node serves up an EJS file but I cant figure out how to get tailwind to watch for changes for a CSS build at the same time so my solution for the moment is to do all my stylings in an HTML file and use the live server extension for HMR and run the tailwind watch. when I'm finished ill move all the HTML and stylings into the actual EJS file and hopefully everything should work the same. To be honest I'd really just prefer to find a solution to running an node server and having taiadadadadaadadadad





Dev Log 10/13/2022 4:30PM


Delete functionality implemented, most of the responsiveness is done and I've added a pop-up modal that appears when the user selects the edit button of an item, the form modal is practically done, maybe a little more workshopping of the color pallete, and the exit button needs functionality, all I need to is toggle the opacity and pointer-events with some js. Now the actual functionality of the update feature, is gonna take some time to figure out. I need to figure out a way to yoink the specific identification of the item clicked and match that with the document in MongoDB to be updated. Shouldnt be too hard, just never done it before.



Dev Log 10/13/2022 7:13PM


I got the update functionality to work, i yoinked the name of the item clicked within the event listener that triggers the form modal to appear, then included that into the update data json that gets delivered to the server via client js fetch API, which was then used to identify the item to be updated in MongoDB. The modal's exit button now works too with ease in-out transitions. Today has been  wildly succesful but still more to do as follows:

-add date input in modal, format the data in "month-day-year" and send along with the update request
- add responsiveness to the modal
-workshop the styling of the modal, not sure if im satisfied with appearance just yet