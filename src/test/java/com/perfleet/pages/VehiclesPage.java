package com.perfleet.pages;

import com.perfleet.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class VehiclesPage extends BasePage {

    CalendarEventsPage calendarEventsPage=new CalendarEventsPage();
    CreateCalendarEventPage createCalendarEventPage =new CreateCalendarEventPage();

    @FindBy(css = "[title='Create Car']")
    public WebElement createACarElement;

    public void clickButton(String string){
        if(string.equalsIgnoreCase("Create Car")) {
            BrowserUtils.wait(5);
            BrowserUtils.waitForVisibility(createACarElement, 30);
            BrowserUtils.waitForClickablility(createACarElement, 25);
            createACarElement.click();
            waitUntilLoaderMaskDisappear();
        }else if(string.equalsIgnoreCase("Create Calendar Event")){
            BrowserUtils.wait(5);
            BrowserUtils.waitForVisibility(calendarEventsPage.createCalendarEvent, 30);
            BrowserUtils.waitForClickablility(calendarEventsPage.createCalendarEvent, 25);
            calendarEventsPage.createCalendarEvent.click();
            waitUntilLoaderMaskDisappear();
        }else if(string.equalsIgnoreCase("Cancel")){
            BrowserUtils.wait(5);
            BrowserUtils.waitForVisibility(createCalendarEventPage.cancelButton, 30);
            BrowserUtils.waitForClickablility(createCalendarEventPage.cancelButton, 25);
            createCalendarEventPage.cancelButton.click();
            waitUntilLoaderMaskDisappear();

        }

    }
}

