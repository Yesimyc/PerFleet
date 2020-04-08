
  Feature: Create Calendar Event Features

    @homework_4_4
    Scenario: Verify that cancel button redirects user to "All Calendar Events" page
      Given user is on the login page
      And user logs in as store manager
      Then user navigates to "Activities" then to "Calendar Events"
      And user clicks on "Create Calendar Event" button
      And user clicks on "Cancel" button
      Then user verifies that "All Calendar Events" page subtitle is displayed

    @homework_4_3
    Scenario: Verify save and close drop-down
      Given user is on the login page
      And user logs in as store manager
      Then user navigates to "Activities" then to "Calendar Events"
      And user clicks on "Create Calendar Event" button
      Then user should see following save and close options
        | Save And Close |
        | Save And New   |
        | Save           |