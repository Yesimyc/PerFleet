package com.perfleet.pages;

import com.perfleet.utilities.BrowserUtils;
import com.perfleet.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CreateCarPage extends BasePage {

    @FindBy(css = "[id^='custom_entity_type_LicensePlate']")
    public WebElement licencePlateElement;

    @FindBy(css = "[id^='custom_entity_type_Driver']")
    public WebElement driverElement;

    @FindBy(name = "custom_entity_type[Location]")
    public WebElement locationElement;

    @FindBy(css = "[class='btn-success btn dropdown-toggle']")
    public WebElement saveAndCloseDropdownElement;

    @FindBy(css = "[class='btn btn-success action-button']")
    public WebElement saveAndCloseButtonElement;

    @FindBy(xpath = "//li//button[contains(text(),'Save and New')]")
    public WebElement saveAndNew;

    @FindBy(xpath = "//li//button[contains(text(),'Save and Close')]")
    public WebElement saveAndCloseButtonFromMenuElement;

    @FindBy(css = "div[class='btn-group pull-right'] > a[data-toggle='dropdown']")
    public WebElement saveAndCloseToggle;

    @FindBy(css = "div[id*='FuelType']")
    public WebElement fuelTypeElement;

    @FindBy(name = "custom_entity_type[ModelYear]")
    public WebElement modelYearElement;

    @FindBy(name = "custom_entity_type[Color]")
    public WebElement colorElement;


    public WebElement selectTags(String tagName){

        WebElement checkbox = Driver.get().findElement(By.cssSelector("[data-name='field__tags'] >div"));
        BrowserUtils.wait(3);
        BrowserUtils.waitForVisibility(checkbox, 10);
        BrowserUtils.waitForClickablility(checkbox,10);
        if(!checkbox.isSelected()){
            checkbox.click();
        }
    return checkbox;
    }

    public void selectFuelType(String fuelType){
        BrowserUtils.waitForVisibility(fuelTypeElement,10);
        BrowserUtils.waitForClickablility(fuelTypeElement,10);
        fuelTypeElement.click();

        WebElement fuelTypeSelectionElement = Driver.get().findElement(By.xpath("//div[@class='select2-result-label' and text()='" + fuelType + "']"));
        BrowserUtils.waitForClickablility(fuelTypeSelectionElement,10);
        fuelTypeSelectionElement.click();

    }
    public void clickSaveAndNewButton(){
        BrowserUtils.wait(2);
        saveAndCloseDropdownElement.click();
        BrowserUtils.wait(2);
        saveAndNew.click();
        waitUntilLoaderMaskDisappear();


    }
    public void clickSaveAndClose(){
        BrowserUtils.wait(2);
        saveAndCloseDropdownElement.click();
        BrowserUtils.wait(4);
        saveAndCloseButtonFromMenuElement.click();
        waitUntilLoaderMaskDisappear();
    }



}
