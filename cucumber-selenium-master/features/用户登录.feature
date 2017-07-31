@userlogin
Feature: 用户登录
测试点： 不同账户登录 有不同情况

Scenario: 正确用户名和密码的情况
 Given 打开网站首页
  When 点击登录按钮
  Then 用户名输入"tangyuan"
  And 密码输入"tvxqsj123"
  And 点击登录
  Then 我应该登录成功并且显示用户名"tangyuan"

