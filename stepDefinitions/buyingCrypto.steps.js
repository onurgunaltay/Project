const { Given, When, Then, Before } = require('@cucumber/cucumber');


Before(async (scenario) => {
    browser.startActivity('com.paribu.app', 'com.paribu.app.MainActivity');
})

Given(`Homepage opens successfully`, async () => {
    // [Given] Sets up the initial state of the system.
    await browser.pause(4000)
});

When(`User clicks on markets button`, async () => {
    const marketsButton = await browser.$('//android.widget.textView[@text="Piyasalar"]');
    await marketsButton.click();
    await browser.pause(4200)
});

Then(`Selects Inch coin`, async() => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Buy button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Buy button in bottomsheet`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on unit price area`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Selects unit cost`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on amount area`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Enters the amount`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Enters a buying order button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Close button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Back to markets page`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Home Page button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Total Assests component is checked and confirmed that User is in HomePage`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Sell button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Clicks on Enters a selling order button`,async () => {
    // [Then] Describes the expected outcome or result of the scenario.
});
