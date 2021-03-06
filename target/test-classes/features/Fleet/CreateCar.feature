

    Feature:
      @create_car
      Scenario: Create new car
        Given user is on the login page
        And user logs in as store manager
        Then user navigates to "Fleet" then to "Vehicles"
        And user clicks on "Create Car" button
        Then user adds new car information:
          | License Plate | Driver      | Location        | Model Year | Color |
          | TestPlates    | Test Driver | Washington D.C. | 2020       | Black |
          |  SuperMan      | Cool Driver | Texas           | 2019       | Red   |