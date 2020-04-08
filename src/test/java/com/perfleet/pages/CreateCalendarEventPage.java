package com.perfleet.pages;

import com.perfleet.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class CreateCalendarEventPage extends BasePage{

    @FindBy(css = "[class='pull-left btn-group icons-holder']")
    public WebElement cancelButton;

    @FindBy(xpath = "//ul[@class='dropdown-menu']/li/button")
    public List<WebElement> saveAndCloseOptions;

    @FindBy(css = "[class='btn-success btn dropdown-toggle']")
    public WebElement saveAndCloseDropdownElement;

    public List<String> getSaveAndCloseOptions(){
        BrowserUtils.wait(5);
        saveAndCloseDropdownElement.click();

        return BrowserUtils.getListOfString(saveAndCloseOptions);
    }
}
