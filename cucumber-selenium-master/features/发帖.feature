@fatie
Feature: 发帖


Scenario: 正确用户名和密码的情况
 Given 打开网站首页
  When 点击登录按钮
  Then 用户名输入"tangyuan"
  And 密码输入"tvxqsj123"
  And 点击登录
  Then 我应该登录成功并且显示用户名"tangyuan"
  Then 点击发布话题按钮
  Then 选择版本点击下拉按钮
  Then 点击分享
  Then 输入标题"aaaaaaaaaaa"
  Then 点击内容
  Then 输入内容"hcoashfohufihmxjxhbjmnizhka,nchmuimovioiomixhfoihximohuioxhuihxiuhxuvhoxsmu"
  Then 点击提交按钮


