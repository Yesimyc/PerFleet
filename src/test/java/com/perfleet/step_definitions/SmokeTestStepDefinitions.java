package com.perfleet.step_definitions;

import com.perfleet.pages.BasePage;
import com.perfleet.pages.DashBoardPage;
import com.perfleet.pages.LoginPage;
import com.perfleet.utilities.BrowserUtils;
import io.cucumber.java.en.Then;

public class SmokeTestStepDefinitions {
    DashBoardPage dashBoardPage = new DashBoardPage();

    @Then("user verifies that {string} pagetitle is displayed")
    public void user_verifies_that_pagetitle_is_displayed(String string) {
        dashBoardPage.Logout();

    }



}
