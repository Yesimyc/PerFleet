package com.perfleet.step_definitions;

import com.perfleet.pages.CreateCarPage;
import com.perfleet.pages.VehiclesPage;
import com.perfleet.utilities.BrowserUtils;
import io.cucumber.java.en.Then;

import java.util.List;
import java.util.Map;

public class CreateCarStepDefinitions {

    CreateCarPage createCarPage = new CreateCarPage();
    VehiclesPage vehiclesPage = new VehiclesPage();

    @Then("user clicks on {string} button")
    public void user_clicks_on_button(String string) {
   vehiclesPage.clickButton(string);

    }

    @Then("user adds new car information:")
    public void user_adds_new_car_information(List<Map<String, String>> dataTable) {
        createCarPage.waitUntilLoaderMaskDisappear();
        System.out.println(dataTable);
        int row=0;
        for(Map<String, String> map: dataTable){
            BrowserUtils.wait(2);
            createCarPage.licencePlateElement.sendKeys(map.get("License Plate"));
            BrowserUtils.wait(2);
            createCarPage.driverElement.sendKeys(map.get("Driver"));
            BrowserUtils.wait(2);
            createCarPage.locationElement.sendKeys(map.get("Location"));
            BrowserUtils.wait(2);
            createCarPage.modelYearElement.sendKeys(map.get("Model Year"));
            BrowserUtils.wait(2);
            createCarPage.colorElement.sendKeys(map.get("Color"));
            BrowserUtils.wait(2);
            if(row==dataTable.size()-1){
                createCarPage.clickSaveAndClose();
            }else{
                createCarPage.clickSaveAndNewButton();
            }
            BrowserUtils.wait(2);
            row++;
        }

    }
}


