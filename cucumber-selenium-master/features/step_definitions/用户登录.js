var driver = require('../support/world').driver;
var By = require('../support/world').By;
var assert = require('assert');
var until = require('../support/world').until;
module.exports = function () {
    this.Given(/^打开网站首页$/, function () {
        return driver.get('http://192.168.220.129:3000')
    });
    this.When(/^点击登录按钮$/, function () {
        return driver.findElement({ css: 'body > div.navbar > div > div > ul > li:nth-child(6) > a' }).click();
    });
    this.Then(/^用户名输入"([^"]*)"$/, function (arg1) {
        return driver.findElement({ css: '#name' }).sendKeys('tangyuan');
    });
    this.Then(/^密码输入"([^"]*)"$/, function (arg1) {
        return driver.findElement({ css: '#pass' }).sendKeys('tvxqsj123');
    });
    this.Then(/^点击登录$/, function () {
        return driver.findElement({ css: '#signin_form > div.form-actions > input' }).click();
    });


    this.Then(/^我应该登录成功并且显示用户名"([^"]*)"$/, function (arg1) {
        return driver.findElement({ css: '#sidebar > div:nth-child(1) > div.inner > div > div > span.user_name > a' }).getText().then((text) => {
            console.log(text, arg1, text = arg1, text != arg1);
            return assert.deepEqual(text, arg1);
        });
    });
     this.Then(/^点击发布话题按钮$/, function () {
        return driver.findElement({css:'#create_topic_btn > span'}).click();
       });
    this.Then(/^选择版本点击下拉按钮$/, function () {
        return driver.findElement({css:'#tab-value'}).click();
       });
    this.Then(/^点击分享$/, function () {
          return driver.findElement({css:'#tab-value > option:nth-child(2)'}).click();
       });
    this.Then(/^输入标题"([^"]*)"$/, function (arg1) {
          return driver.findElement({css:'#title'}).sendKeys(arg1);
       });
    this.Then(/^点击内容$/, function () {
          return driver.findElement({css:'#create_topic_form > fieldset > div > div > div.CodeMirror.cm-s-paper > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div'}).click();
       });
    this.Then(/^输入内容"([^"]*)"$/, function (arg1) {
        driver.findElement({css:'.CodeMirror-scroll'}).click();
        let editor =driver.wait(until.elementLocated({css:'div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div:nth-child(4)'}));

        driver.actions().mouseMove(editor).sendKeys(arg1).perform().then(()=>{
            return driver.sleep(3000)
        });
        //  return driver.findElement({css:'div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div:nth-child(4)'}).sendKeys(arg1);
       });
    this.Then(/^点击提交按钮$/, function () {
         return driver.findElement({css:'#create_topic_form > fieldset > div > div > div.editor_buttons > input'}).click();
       });
}
