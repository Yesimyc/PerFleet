$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/activities/CalendarEvents.feature");
formatter.feature({
  "name": "All calendar events",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@calendar_events"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify column names",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@calendar_events"
    },
    {
      "name": "@column_names"
    }
  ]
});
formatter.step({
  "name": "user verifies that column names are displayed",
  "rows": [
    {
      "cells": [
        "TITLE"
      ]
    },
    {
      "cells": [
        "CALENDAR"
      ]
    },
    {
      "cells": [
        "START"
      ]
    },
    {
      "cells": [
        "END"
      ]
    },
    {
      "cells": [
        "RECURRENT"
      ]
    },
    {
      "cells": [
        "RECURRENCE"
      ]
    },
    {
      "cells": [
        "INVITATION STATUS"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalendarEventsStepDefinitions.user_verifies_that_column_names_are_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that \"Title\" column still displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@calendar_events"
    },
    {
      "name": "@homework_4_2"
    }
  ]
});
formatter.step({
  "name": "user \"deselects\" following grid options",
  "rows": [
    {
      "cells": [
        "CALENDAR"
      ]
    },
    {
      "cells": [
        "START"
      ]
    },
    {
      "cells": [
        "END"
      ]
    },
    {
      "cells": [
        "RECURRENT"
      ]
    },
    {
      "cells": [
        "RECURRENCE"
      ]
    },
    {
      "cells": [
        "INVITATION STATUS"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalendarEventsStepDefinitions.user_following_grid_options(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that column names are displayed",
  "rows": [
    {
      "cells": [
        "TITLE"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventsStepDefinitions.user_verifies_that_column_names_are_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/activities/CreateCalendarEvent.feature");
formatter.feature({
  "name": "Create Calendar Event Features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that cancel button redirects user to \"All Calendar Events\" page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homework_4_4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Create Calendar Event\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_clicks_on_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/calendar/event/create\" class\u003d\"btn main-group btn-primary pull-right \" title\u003d\"Create Calendar event\"\u003e...\u003c/a\u003e is not clickable at point (1314, 137). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Yesims-Air-3.hsd1.tx.comcast.net\u0027, ip: \u00272601:2c2:700:6740:0:0:0:bbfa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/y3/r0h4y5m509q...}, goog:chromeOptions: {debuggerAddress: localhost:53604}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a96996364570f2bf19b5d13b073b5762\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.perfleet.pages.VehiclesPage.clickButton(VehiclesPage.java:26)\n\tat com.perfleet.step_definitions.CreateCarStepDefinitions.user_clicks_on_button(CreateCarStepDefinitions.java:18)\n\tat ✽.user clicks on \"Create Calendar Event\" button(file:src/test/resources/features/activities/CreateCalendarEvent.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on \"Cancel\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that \"All Calendar Events\" page subtitle is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_verifies_that_page_subtitle_is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify save and close drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homework_4_3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" then to \"Calendar Events\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Create Calendar Event\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_clicks_on_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see following save and close options",
  "rows": [
    {
      "cells": [
        "Save And Close"
      ]
    },
    {
      "cells": [
        "Save And New"
      ]
    },
    {
      "cells": [
        "Save"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCalendarEventStepdefinitions.user_should_see_following_save_and_close_options(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/fleet/CreateCar.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create new car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create_car"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as store manager",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_store_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" then to \"Vehicles\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_then_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Create Car\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_clicks_on_button(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"/entity/update/Extend_Entity_Carreservation/item\" class\u003d\"btn main-group btn-primary pull-right \" title\u003d\"Create Car\"\u003e...\u003c/a\u003e is not clickable at point (1348, 137). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Yesims-Air-3.hsd1.tx.comcast.net\u0027, ip: \u00272601:2c2:700:6740:0:0:0:bbfa%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/y3/r0h4y5m509q...}, goog:chromeOptions: {debuggerAddress: localhost:53691}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5d03ff9a3fc6544161183e178ff5588e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.perfleet.pages.VehiclesPage.clickButton(VehiclesPage.java:20)\n\tat com.perfleet.step_definitions.CreateCarStepDefinitions.user_clicks_on_button(CreateCarStepDefinitions.java:18)\n\tat ✽.user clicks on \"Create Car\" button(file:src/test/resources/features/fleet/CreateCar.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "user adds new car information:",
  "rows": [
    {
      "cells": [
        "License Plate",
        "Driver",
        "Location",
        "Model Year",
        "Color"
      ]
    },
    {
      "cells": [
        "TestPlates",
        "Test Driver",
        "Washington D.C.",
        "2020",
        "Black"
      ]
    },
    {
      "cells": [
        "SuperMan",
        "Cool Driver",
        "Texas",
        "2019",
        "Red"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateCarStepDefinitions.user_adds_new_car_information(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});