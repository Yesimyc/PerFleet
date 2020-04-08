package com.perfleet.step_definitions;

import com.perfleet.pages.CalendarEventsPage;
import com.perfleet.pages.CreateCalendarEventPage;
import com.perfleet.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class CreateCalendarEventStepdefinitions {

    CalendarEventsPage calendarEventsPage = new CalendarEventsPage();
 CreateCalendarEventPage createCalendarEventPage = new CreateCalendarEventPage();

    @Then("user should see following save and close options")
    public void user_should_see_following_save_and_close_options(List<String> dataTable) {
        calendarEventsPage.waitUntilLoaderMaskDisappear();
        BrowserUtils.wait(3);
        System.out.println(dataTable);
        Assert.assertEquals("",dataTable,createCalendarEventPage.getSaveAndCloseOptions());
        BrowserUtils.wait(3);
        System.out.println(createCalendarEventPage.getSaveAndCloseOptions());


    }


}
