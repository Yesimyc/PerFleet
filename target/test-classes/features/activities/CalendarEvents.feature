@calendar_events
Feature: All calendar events

  Background:
    Given user is on the login page
    And user logs in as store manager
    Then user navigates to "Activities" then to "Calendar Events"

@column_names
  Scenario: Verify column names
  And user verifies that column names are displayed
      | TITLE             |
      | CALENDAR          |
      | START             |
      | END               |
      | RECURRENT         |
      | RECURRENCE        |
      | INVITATION STATUS |

#  @homework_4_1
#  Scenario: Verify that view, edit and delete calendar options are displayed
#    And user verifies that following options are displayed for "Testers meeting" calendar event
#      | Delete |
#      | Edit   |
#      | View   |


  @homework_4_2
  Scenario: Verify that "Title" column still displayed
    And user "deselects" following grid options
      | CALENDAR          |
      | START             |
      | END               |
      | RECURRENT         |
      | RECURRENCE        |
      | INVITATION STATUS |
    Then user verifies that column names are displayed
      | TITLE |



