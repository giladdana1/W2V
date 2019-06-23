"use strict";
// This is a test case example of go to eCommerce Site and click on a Product.
describe("Go to the Homepage ", function () {
    browser.ignoreSynchronization = true; // This allows to protractor to run on regular website, not specific to angular 
    it("Go to the Home page ", function () {
        browser.get("http://google.com/"); // Go to a specific URL
        console.log("Google Open successfuly"); // Log a message
    });
    it("click in search", function () {
        element(by.name('q')).sendKeys('Way2Vat');
        console.log("type way2vat successfuly"); // Log a message
        browser.sleep(1000);
        var searchButton = element.all(by.name('btnK')).first();
        searchButton.click();
        console.log("click on search button successfuly"); // Log a message
        browser.sleep(10000);
        var linkToWay2Vat = element(by.css("#rso > div > div > div:nth-child(1) > div > div > div.r > a:nth-child(1) > div > cite > span"));
        expect(linkToWay2Vat.getText()).toEqual('https://way2vat.com/');
        console.log("validate https://way2vat.com/ is the first option successfuly"); // Log a message
        linkToWay2Vat.click();
        console.log("successfuly clicked on way2vat link"); // Log a message
        element(by.css("#mk-header-1 > div > div.mk-header-inner.add-header-height > div.mk-grid.header-grid > div.mk-header-nav-container.one-row-style.menu-hover-style-1 > a:nth-child(4) > img")).isPresent();
        console.log("validation on the way2vat site successfuly"); // Log a message
    });
});
