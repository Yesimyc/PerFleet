package com.perfleet.pages;

import com.perfleet.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DashBoardPage extends BasePage{

    @FindBy(css = "[class='fa-caret-down']")
    public WebElement logoutToggle;



    @FindBy(css = "[class='no-hash']")
    public WebElement logoutButton;


    public void Logout(){
        waitUntilLoaderMaskDisappear();
        logoutToggle.click();
        BrowserUtils.wait(3);
        logoutButton.click();
        BrowserUtils.wait(3);

    }
}
