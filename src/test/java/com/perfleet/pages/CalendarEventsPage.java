package com.perfleet.pages;

import com.perfleet.utilities.BrowserUtils;
import com.perfleet.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class CalendarEventsPage extends BasePage {

    @FindBy(css = "[title='Create Calendar event']")
    public WebElement createCalendarEvent;

    @FindBy(xpath = "//span[@class='grid-header-cell__label']")
    public List<WebElement> columnNames;
    //tbody/tr[5]/td[2]
    @FindBy(xpath = "(//td[text()='Testers Meeting'])[1]")
    public WebElement testersMeeting;

    @FindBy(css = "[title='Grid Settings']")
    public WebElement gridSettingButton;

    @FindBy(css = "[data-role='renderable']")
    public List<WebElement> gridOptions;

    @FindBy(xpath = "(//a[@class='grid-header-cell__link']/span)[1]")
    public WebElement titleTitle;

    @FindBy(css="[class='btn-success btn dropdown-toggle']")
    public WebElement saveAndCloseButton;

    @FindBy(xpath = "//ul[@class='dropdown-menu']/li/button")
    public List<WebElement> saveAndCloseOptions;





    public List<String> getColumnNames() {
        return BrowserUtils.getListOfString(columnNames);
    }

    public void selectGridOption(){
        waitUntilLoaderMaskDisappear();
        gridSettingButton.click();
        WebDriverWait wait=new WebDriverWait(Driver.get(), 10);
        BrowserUtils.wait(2);

        for(int i=1; i<gridOptions.size();i++){
            if(gridOptions.get(i).isSelected()){
                gridOptions.get(i).click();
            }
        }
        BrowserUtils.wait(4);

    }


    }




