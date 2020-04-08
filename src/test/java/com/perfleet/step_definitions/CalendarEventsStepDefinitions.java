package com.perfleet.step_definitions;

import com.perfleet.pages.CalendarEventsPage;
import com.perfleet.pages.CreateCalendarEventPage;
import com.perfleet.pages.VehiclesPage;
import com.perfleet.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class CalendarEventsStepDefinitions {

    CalendarEventsPage calendarEventsPage = new CalendarEventsPage();
    VehiclesPage vehiclesPage =new VehiclesPage();
    CreateCalendarEventPage createCalendarEventPage=new CreateCalendarEventPage();

    @Then("user verifies that column names are displayed")
    public void user_verifies_that_column_names_are_displayed(List<String> dataTable) {
        calendarEventsPage.waitUntilLoaderMaskDisappear();
        BrowserUtils.wait(3);
        System.out.println(dataTable);
        Assert.assertEquals("",dataTable,calendarEventsPage.getColumnNames());
        System.out.println(calendarEventsPage.getColumnNames());

    }
    @Then("user verifies that following options are displayed for {string} calendar event")
    public void user_verifies_that_following_options_are_displayed_for_calendar_event(String string, io.cucumber.datatable.DataTable dataTable) {

    }


    @Then("user {string} following grid options")
    public void user_following_grid_options(String string, List<String> dataTable) {
        BrowserUtils.wait(2);
        calendarEventsPage.selectGridOption();
        Assert.assertTrue("Title is not displayed",calendarEventsPage.titleTitle.isDisplayed());

    }






}
