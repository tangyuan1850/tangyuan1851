require('chromedriver');
var webdriver = require('selenium-webdriver');
var By =webdriver.By;
var until = webdriver.until;
var driver =new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();
driver.get('http://192.168.220.129:3000/');
driver.findElement(By.css('body > div.navbar > div > div > ul > li:nth-child(6) > a')).click();
driver.findElement(By.css('#name')).sendKeys('tangyuan');
driver.findElement(By.css('#pass')).sendKeys('tvxqsj123');
driver.findElement(By.css('#pass')).submit();
driver.findElement(By.css('#create_topic_btn > span')).click();
driver.findElement(By.css('#title')).sendKeys('数字数字数字数字数字');
driver.sleep(3 * 1000).then(function () {
    return driver.findElement(By.css("#tab-value")).click();
})
driver.findElement(By.css('#tab-value > option:nth-child(2)')).click();
driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll')).click();
// driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll > div:nth-child(2)')).sendKeys('1234567890');
let editor = driver.findElement({css:'#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll > div:nth-child(2)'})
driver.actions().mouseMove(editor).sendKeys("1234567890").perform();
driver.findElement(By.css('#create_topic_form > fieldset > div > div > div.editor_buttons > input')).submit();