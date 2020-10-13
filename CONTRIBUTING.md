# Contributing to what-to-watch
If your new to open source, welcome! This contributing file will provide a more in depth step-by-step guide of contributing to this project. Also, I recommend you have a look at [Wiki - Netflix List of Shows](https://en.wikipedia.org/wiki/List_of_Netflix_original_programming) and [Wiki - Hulu List of Shows](https://en.wikipedia.org/wiki/List_of_Hulu_original_programming) for easily finding and adding show metadata! Please only add shows to the collection **with appropiate** titles!

## Local Setup

1. Clone your fork of the project with `git clone https://github.com/your-user/what-to-watch.git`
2. Change directory into the cloned project with `cd what-to-watch`
3. Open VS Code (or any text editor) and open the `/what-to-watch/` project.
4. Install project dependencies `npm install`
5. Build command that generates the static files in the build output directory `_site`.
```
npm run build
```
6. Serve locally, start a local development server with hot-reloading via browsersync using: 
```
npm run serve
```

## Adding a new show
If you're adding a new show to the collection, hats off to you! Here are a few guidelines to follow before making a contribution to this project. After you have completed the local setup mentioned above, you are ready to add your shows data as a Markdown file. The naming convention for adding new shows will be all lowercase and hypen-seperated ie [kebab-case](https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case). 

```
Expected naming convention for a show: stranger-things.md
```

Before creating your markdown file and adding your shows data,

1. Create a new branch with the show name your adding `git checkout -b stranger-things`
    - If you don't feel comfortable making a new branch, pushing to your local `master` branch is fine too. The difference is when I review the PR it would look like: `<your-name>:master` instead of the new branch `<your-name>:stranger-things` 
2. Add the upstream repository as a remote with 
```
git remote add upstream https://github.com/tannerdolby/what-to-watch.git
```
3. Get information about the upstream remote using `git fetch upstream`

Now your all set to create a Markdown file and add your shows metadata as [front matter](https://www.11ty.dev/docs/data-frontmatter/).

## Create your shows markdown file in the `/shows/` directory and add metadata
After you've created a Markdown file with the appropiate naming convention. It's time to add the shows metadata as front matter, which uses a [YAML](https://yaml.org/spec/1.2/spec.html) syntax.

Example file: `stranger-things.md` & full file path `/src/shows/stranger-things.md`
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

Make sure to follow the same format as I've shown above, using title case for the tags list values. Please include all the genres for a show in the `tags` list! The `permalink` scalar MUST be `permalink: "/shows/{{ title | slug}}/" so please make sure it is this exact value.

Stranger things is labeled in the "Drama" section and has the Science fiction + Horror tags. If a genre is more than one word please use snake_case. Also, **ALL SHOWS** in the collection will have the `Series` tag added, please don't forget this or I will have to update it.


4. After you've added your markdown file to the `/shows/` directory, add your changes to the staging area with `git add <filename>` or simply `git add .` to add all changed files in the directory to the staging area. 
5. Commit your changes `git commit -m "Commit msg"`
6. Push your changes to your local remote `git push -u origin stranger-things` and if you chose not to create a branch specifc to your show title, just push to master `git push -u origin master`. (-u flag stands for --set-upstream)
7. Create a pull request in the remote upstream repository (https://github.com/tannerdolby/what-to-watch/).
8. Wait for your PR to be reviewed and merged! If there are any issues I will mention what to fix in the comments of your submitted PR before merging.
9. Celebrate! <span>🎉</span>