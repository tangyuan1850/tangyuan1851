//require('chromedriver');
//var webdriver = require('selenium-webdriver');
//var driver = new webdriver.Builder().forBrowser('chrome').build();
//driver.get("https://autowebtest.github.io/")
//driver.sleep(20*1000).then(function(){
//    driver.quit();
//})
require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By
var until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("https://autowebtest.github.io/myself/")
//driver.findElement(By.css("body > dir.wrapper>hesder>a")).click();
//driver.until;{driver.findElement(By.css("body > dir.wrapper>hesder>a"))}

driver.sleep(20 * 1000).then(function () {
    return driver.findElement(By.css("body > div.wrapper > header > a")).click();
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(1) > a')).click();
driver.sleep(20 * 1000).then(function () {
    return driver.findElement(By.css("body > div.wrapper > header > a")).click();
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(2) > a')).click();

driver.sleep(20 * 1000).then(function () {
    return driver.findElement(By.css("body > div.wrapper > header > a")).click();
})

driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(3) > a')).click();
driver.sleep(20 * 1000).then(function () {
    return driver.findElement(By.css("body > div.wrapper > header > a")).click();
})
driver.findElement(By.css('body > div.wrapper > header > nav > ul > li:nth-child(4) > a')).click();

driver.sleep(5 * 1000).then(function () {
    return driver.quit();
})
