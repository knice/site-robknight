---
layout: project
date: "2016-03-12"
title: "Slack Roomicorn"
tools:
- Ruby (Sinatra)
- Google Calendar API
- Heroku
---

We have several conference rooms in our office, and sometimes you just need to jump into a room for a few minutes. So I built this Slack bot to show you which rooms are available for **X** minutes.

The Roomicorn checks to see which rooms are empty for the number of minutes you've requested and returns a list of available rooms. This is all done with the helpful `FreeBusy` Google Calendar API method.

{% img 2016/screen-roomicorn.jpg magick:resize:600 alt:'Screenshot of the Slack Roomicorn' %}
