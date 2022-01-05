---
layout: project
tag: project
date: "2015-04-19"
title: "Sendra for email"
tools:
  - Ruby (Rails)
  - Google Gmail API
  - Heroku
---

HTML email can be a tough sport. UC Santa Cruz uses Google services to send email to faculty, staff, and students but the Gmail interface does not support HTML email authoring. So I built Sendra, a tool to make it easy to send HTML email through Gmail.

Sendra takes a URL for an HTML page, scrapes the HTML and packages it into an email. When the user is ready to send the email, Sendra uses the Gmail API to send the message.

![Screenshot of the Sendra for email app](/assets/images/2016/screen-sendra.jpg)
