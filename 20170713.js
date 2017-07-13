require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
driver.get('https://autowebtest.github.io/add-remove/index.html');
var data=['aa','bb','cc','dd','ee'];
for(var info of data){
        driver.findElement(By.id('text')).sendKeys(info);
        driver.findElement(By.id('text')).submit();
    }
driver.findElements(By.className('new-item')).then(function(eles ){
    console.log('length',eles.length)
})    
var chai=require('chai');
var assert=chai.assert;
driver.findElements(By.className('new-item')).then(function(eles){
    return assert.equal(eles.length,5)
})
driver.findElement(By.className('new-item')).getText().then(function(text){
    console.log(text);
})
driver.takeScreenshot().then(function(screen){
    require('fs').writeFile('out.png',screen,'base64');
})
