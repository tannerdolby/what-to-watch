# What to Watch
A collection of shows and series to browse. Whenever you want to find a new show, give this site a look and maybe you'll uncover a new series your interested in watching. Built with Eleventy.

## Local setup
1. Fork this project to your users organization
2. Clone repo: `git clone git@github.com:tannerdolby/what-to-watch.git`
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Serve locally: `npm run serve`

## Contribute
Have you ever been looking for a new Netflix series or TV show to watch? Hmm, me too. If you know of a really great show or series that's not currently on the site, feel free to contribute by adding the missing show data to `/shows/` as a `.md` file (ie `stranger-things.md`) with the appropiate show metadata. 

Have a look at [CONTRIBUTING.md](https://github.com/tannerdolby/what-to-watch/blob/masterCONTRIBUTING.md) for a guide on getting things setup before making a PR and adding your show to the site.

### How to add a show
Add your favorite TV show/series data as an object to the global data file `shows.json` to the `/shows/` directory. You can find the required data from any site but I recommend having a look at [Wiki - Netflix list of shows](https://en.wikipedia.org/wiki/List_of_Netflix_original_programming) or [Wiki - Hulu list of shows](https://en.wikipedia.org/wiki/List_of_Hulu_original_programming). 

Example: show data as front matter using [YAML](https://yaml.org/spec/1.2/spec.html) syntax

filename: `stranger-things.md`
```
---
title: Stranger Things
url: https://en.wikipedia.org/wiki/Stranger_Things
permalink: "/shows/{{ title | slug }}/"
createdBy: 
    - The Duffer Brothers
tags:
    - Science_fiction
    - Horror
    - Drama
    - Series
date: 2016-15-06
dateStr: July 15, 2016
seasons: 3
episodes: 25
runtime: 42-78min
streamingService:
    - Netflix
---
```
