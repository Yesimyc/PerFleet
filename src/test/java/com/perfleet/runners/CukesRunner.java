package com.perfleet.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/test/resources/features",
        glue = "com/perfleet/step_definitions",
        dryRun = false,
        tags = "@create_car",
        plugin = {"html:target/default-cucumber-reports",
                  "json:target/cucumber.json",
                  "rerun:target/rerun.txt"
        }


)

public class CukesRunner {
}
