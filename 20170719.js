require('chromedriver');
var assert = require('assert');
var webdriver =require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
var arr = ['aa','bb','cc','dd','ee'];
describe('hooks',function(){
     this.timeout(30*1000)
    before(function(){
        console.log('before...........')
        driver.get('https://autowebtest.github.io/add-remove/');
    });
    after(function(done){
        console.log('after...........')
        driver.quit().then(function(){
        return new Promise((resovle,reject)=>{
            resovle();
        }).then(done);
        });
    });
    beforeEach(function() {
      console.log('beforeEach........')
    // runs before each test in this block
    });
    afterEach(function(done){
        console.log('afterEach...........')
        driver.takeScreenshot().then((ImageData)=>{
            var date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hour =date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            let filename = year+'_'+month+'_'+day+'_'+hour+'_'+min+'_'+sec+'_'+'.png'
            require('fs').writeFileSync(filename,ImageData,'base64');
            return new Promise((resovle,reject)=>{
                resovle();
            }).then(done);
        })
    })
describe('#elemenet control',function(){
   
    it('add 5 element长度为5',function(done){
        arr.forEach((item)=>{
            driver.findElement(By.id('text')).sendKeys(item);
            driver.findElement(By.id('text')).submit();
        });
        driver.executeScript('document.querySelector(".clear-all").scrollIntoView()');
        driver.findElements(By.className('new-item')).then(eles=>{
            return new Promise(function(resovle,reject){
                assert(5,eles.length);
                resovle();
            }).then(done);
        });
    });
describe('#elemenet control',function(){
     it('delete',function(done){
         driver.findElement(By.css('.clear-all')).click();
         driver.switchTo().alert().accept().then(()=>{
             return new Promise(function(resovle,reject){
                 resovle();
             }).then(done);
         });
     });
 });   
});    
});