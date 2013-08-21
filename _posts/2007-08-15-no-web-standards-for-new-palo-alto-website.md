---
date: '2007-08-15 00:14:04'
layout: post-no-feature
slug: new-palo-alto-website
title: "Bad Code is Expensive"
categories:
- technology
- work
- thoughts
---

The city of Palo Alto recently launched a $240,000 redesign of [cityofapaloalto.org](http://cityofpaloalto.org). The [response](http://www.paloaltoonline.com/news/show_story.php?id=5604#comments) from the community has been [less than enthusiastic](http://www.paloaltoonline.com/news/show_story.php?id=5562#comments):

> So far, with this website as a great example, we have managed to create a image of a city that could be aptly described by Gertrude Stein, when she said about another city, "there's no there, there".

In all honesty, when I first took a look at the site, I didn't think it was that bad. It is simple, not cluttered and gives access to important information about Palo Alto. I agree with many who worry it doesn't properly portray the vitality and beauty of the city, but all in all I think they came up with a good, functional design that can be built upon. I'd start by replacing the images used for text (interior page navigation) with real text so those of us who don't enjoy reading 10pt fonts can resize the text as needed. A government website should definitely avoid image-based text because it must accommodate visitors of all ages and vision quality. There are [accessibility guidelines for stuff like this](http://www.w3.org/TR/WAI-WEBCONTENT/).

As a web developer though, I can't stop at the visual design. I am compelled to see what's under the hood. So after a few minutes of clicking around, I decided the view the HTML source in my browser. That is where this website, IMHO, is a failure.

## Too Much Javascript

The source code, up and down the page, is full of Javascript. All of it could have been enclosed in external documents linked from the head. Instead, it's sprinkled throughout the HTML like M&Ms in a root beer float. Not pretty and not functional. Debugging a Javascript error on that page would be like sitting in on a foreign policy meeting with the president.

Given the haphazard location of the Javascript, it's no surprise that it is also used for image rollovers. Tell Marty to [fire up the De Lorean!](http://en.wikipedia.org/wiki/Back_to_the_Future) We're headed back to 1998! Meanwhile, in 2007, the same thing can be done with simple, unobtrusive text links, CSS background images and NO Javascript. It is simply poor code and poor form to use Javascript for rollovers.

## Table-based Layout

There is no reason to use HTML tables for layout. Semantic HTML and CSS work in all major browsers and, if properly coded, can degrade gracefully in older browsers. The layout for the site is not complex enough to make an argument for the use of antiquated layout techniques. On top of that, the HTML source of the front page is all on a single line, which made it quite difficult to find in that sea of Javascript.

## We Don't Need No Stinking Validation

The DOCTYPE being used on the site is HTML 4.0 Transitional. This is about as forgiving a DOCTYPE as you can use without just leaving a DOCTYPE declaration off altogether. Yet, as I write this, [the front page has 5 validation errors](http://validator.w3.org/check?verbose=1&uri=http%3A%2F%2Fwww.cityofpaloalto.org%2F). These are simple errors that should have been fixed before the site launches. I will freely admit that W3C validation is not always on your mind as you're coming down to launch day. But it is something you should always do before a site launches, just so you don't leave any embarrassing bugs for the world to see/experience.

But wait, there's more:

-  HTML `alt` attributes are missing on some images.
-  `blank.gif`, an empty image file, is used throughout the layout where text links could have been used.	
-  Some HTML tags are in uppercase.
-  Some pages [fail to render properly](http://www.cityofpaloalto.org/forms/onlinereporting/abandoned-bicycle.lasso) in modern browsers.

All of this points to one thing that particularly frustrates me. The city of Palo Alto spent a lot of money on an antiquated Content Management System (CMS) that spits out dreadfully bad code. After $240,000, I'd expect more and I'm not surprised that the residents of Palo Alto are upset.