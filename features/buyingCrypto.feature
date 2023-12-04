@Test1
Feature: Buying crypto asset in application1

This feature provides to buy crypto assets

Scenario: Buying Crypto assets1
Given Homepage opens successfully
When User clicks on markets button
Then Selects Inch coin
Then Clicks on Buy button
Then Clicks on Buy button in bottomsheet
Then Clicks on unit price area
Then Selects unit cost
Then Clicks on amount area
Then Enters the amount
Then Clicks on Enters a buying order button
Then Clicks on Close button
Then Back to markets page
Then Clicks on Home Page button
Then Total Assests component is checked and confirmed that User is in HomePage

@Test2
Scenario: Selling Crypto assets2
Given Homepage opens successfully
When User clicks on markets button
Then Selects Inch coin
Then Clicks on Sell button
Then Clicks on unit price area
Then Selects unit cost
Then Clicks on amount area
Then Enters the amount
Then Clicks on Enters a selling order button
Then Clicks on Close button
Then Back to markets page
Then Clicks on Home Page button
Then Total Assests component is checked and confirmed that User is in HomePage


@Test4
Scenario: Notifications readall check
Given Homepage opens successfully
When User clicks on alarm button
Then User clicks on notifications tab
Then User clicks on readAll button
Then Read All notifications component is checked
Then Clicks on Home Page button
Then Total Assests component is checked and confirmed that User is in HomePage

