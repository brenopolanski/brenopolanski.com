---
title: Installing Saiku Community on Ubuntu
date: 2015-08-01
description: A guide to installing Saiku CE version on Ubuntu 14.04 LTS.
---

## [Saiku](http://www.meteorite.bi/products/saiku) allows business users to explore complex data sources, using a familiar drag and drop interface and easy to understand business terminology, all within a browser. Select the data you are interested in, look at it from different perspectives, drill into the detail. Once you have your answer, save your results, share them, export them to Excel or PDF, all straight from the browser.

In this post I will explain how you can install the Saiku Community version in Ubuntu 14.04 LTS.

> **Important:** *You need have Java 7 installed and configured your on machine.*

***

## Download Saiku CE

[![site-saiku-community](https://raw.githubusercontent.com/brenopolanski/brenopolanski.github.io/master/assets/images/posts/site-saiku-community.png)](http://community.meteorite.bi)

Go to [community download page](http://community.meteorite.bi) and click in **Download Saiku CE**.

Download done, unzip the files for folder `/usr/local/saiku/` typing the following commands in your terminal:

Unzip file saiku-latest.zip:

```sh
$ sudo unzip saiku-latest.zip
```

Create a folder `saiku` within the directory `/usr/local/`:

```sh
$ sudo mkdir /usr/local/saiku/
```

Move `saiku-server/` for folder `/usr/local/saiku/`:

```sh
$ sudo mv saiku-server/ /usr/local/saiku/
```

## Running Saiku

Go to the folder `saiku-server/` and type the following commands in your terminal:

```sh
# add execute permission
$ sudo chmod +x start-saiku.sh
# execute saiku
$ sh start-saiku.sh
```

## Open Saiku in browser

Saiku run in port 8080, enter in your browser **http://localhost:8080** for access.

[![saiku-demo](http://www.meteorite.bi/images/chart1.jpg)](http://www2.meteorite.bi/saiku-demo/)