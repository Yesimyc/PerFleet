package com.perfleet.step_definitions;

import com.perfleet.pages.LoginPage;
import com.perfleet.utilities.BrowserUtils;
import com.perfleet.utilities.ConfigurationReader;
import com.perfleet.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Map;

public class LoginStepDefinitions {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("User is on the login page");
        Driver.get().get(ConfigurationReader.getProperty("url"));

    }

    @Then("user logs in as store manager")
    public void user_logs_in_as_store_manager() {
        System.out.println("Login as store manager");
        String username = ConfigurationReader.getProperty("store.manager.username");
        String password = ConfigurationReader.getProperty("password");
        loginPage.login(username, password);
    }

    @Then("user verifies that {string} page subtitle is displayed")
    public void user_verifies_that_page_subtitle_is_displayed(String string) {
        System.out.println(string);
        loginPage.waitUntilLoaderMaskDisappear();
        Assert.assertEquals(string, loginPage.getPageSubTitle());
        System.out.println(loginPage.getPageSubTitle());
        System.out.println("Verifiying page subitle is : " +string);

    }

    @Then("user logs in as driver")
    public void user_logs_in_as_driver() {
        System.out.println("Login as driver");
        String username = ConfigurationReader.getProperty("driver.username");
        String password = ConfigurationReader.getProperty("password");
        loginPage.login(username, password);
    }

    @Then("user logs in as sales manager")
    public void user_logs_in_as_sales_manager() {
        System.out.println("Login as sales manager");
        String username = ConfigurationReader.getProperty("sales.manager.username");
        String password = ConfigurationReader.getProperty("password");
        loginPage.login(username, password);

    }

    @Then("user enters {string} username and {string} password")
    public void user_enters_username_and_password(String string, String string2) {
        System.out.println("Login with "+string+" username and "+string2+" password");
        loginPage.login(string, string2);
    }

    @Then("user verifies that {string} message is displayed")
    public void user_verifies_that_message_is_displayed(String string) {
        Assert.assertEquals(loginPage.warningMessage.getText(),string);
        System.out.println("Verified that warning message is displayed: "+string);

    }
    @Then("user logs in as driver with following credentials")
    public void user_logs_in_as_driver_with_following_credentials(Map<String, String> dataTable) {
        System.out.println(dataTable);
        loginPage.login(dataTable.get("username"),dataTable.get("password"));

    }
    @Then("user logs in as {string}")
    public void user_logs_in_as(String string) {

        loginPage.login(string);
    }


    @When("user navigates to {string} then to {string}")
    public void user_navigates_to_then_to(String string, String string2) {
        BrowserUtils.wait(3);
        loginPage.navigateTo(string,string2);
    }

    @Then("the page title should be {string}")
    public void the_page_title_should_be(String string) {
        BrowserUtils.waitForPageTitle(string);
        Assert.assertEquals("Title is incorrect",string, Driver.get().getTitle());

    }






}
