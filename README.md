Youth India E-School
Backend Developer Assessment

Problem: 
In this assignment, you have to implement google calendar integration using rest API. You need to use the OAuth2 mechanism to get users' calendar access. Below is the detail of the API endpoint and corresponding views which you need to implement -

1) /rest/v1/calendar/init/ - GoogleCalendarInitView()
This view should start step 1 of the OAuth. Which will prompt the user for his/her credentials.

2) /rest/v1/calendar/redirect/ -> GoogleCalendarRedirectView()
This view will do two things -
i) Handle redirect requests sent by google with code for token. You need to implement a mechanism to get access_token from the given code.
ii) Once you get the access_token get a list of events in the user's calendar.
You need to write the code in NodeJs. Please try not to use any existing third-party library other than google’s provided standard libraries unless and until very necessary to use.


Submission Guideline:
i) You need to submit this assignment within 24 hours.
ii) The assignment needs to be submitted to info@youthindiaeschool.com .
iii) Please create a GitHub repo and upload the code there.
iv) In the mail attach the GitHub repo link (make sure to make it public) along with your Resume and Basic Info such as name, phone number, email address, etc.
v) The Subject of the mail should be “<Your_Name> | Backend Assessment
Submission”

Looking forward to your submission. Have a great day.
