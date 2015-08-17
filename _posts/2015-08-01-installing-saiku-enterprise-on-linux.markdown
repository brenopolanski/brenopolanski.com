---
title: Installing Saiku Enterprise on Linux
date: 2015-08-16
description: A guide to installing Saiku EE on Linux.
---

## [Saiku](http://www.meteorite.bi/products/saiku) allows business users to explore complex data sources, using a familiar drag and drop interface and easy to understand business terminology, all within a browser. Select the data you are interested in, look at it from different perspectives, drill into the detail. Once you have your answer, save your results, share them, export them to Excel or PDF, all straight from the browser.

In this post I will explain how you can install the Saiku Enterprise Edition on Linux.

> **Important:** *You need have Java 7 installed and configured your on machine.*

***

## Download Saiku EE

[![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/portal-saiku-login.gif)](https://portal.meteorite.bi/)

Go to [portal download page](https://portal.meteorite.bi/) and do login or create a new account.

Download done, navigate to the folder where the file was downloaded and enter the following command in your terminal:

```sh
$ sudo java -jar saiku-installer-x.x.x.jar
```

The installer will open, then click in next:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step1.png)

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step2.png)

Accept the terms of license:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step3.png)

Select the installation path:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step4.png)

Select the packs you want to install:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step5.png)

If you require a trial license please enter you email address in the box below or visit [https://portal.meteorite.bi/](https://portal.meteorite.bi/):

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step6.png)

Select your license key:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step7.png)

Installation successful:

![portal-saiku-login](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/saikuee-install-step9.png)

## Running Saiku

Go to the folder `/usr/local/Saiku Enterprise/server/` and type the following commands in your terminal:

```sh
# add execute permission
$ sudo chmod +x start-saiku.sh
# execute saiku
$ sh start-saiku.sh
```

## Open Saiku in your browser

Saiku run in port 8080, enter in your browser **http://localhost:8080** for access.

[![saiku-demo](http://www.meteorite.bi/images/chart1.jpg)](http://www2.meteorite.bi/saiku-demo/)
