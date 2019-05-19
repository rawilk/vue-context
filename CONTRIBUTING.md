# Contributing to Vue Context

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

## Code of Conduct

This project and everyone participating in it is governed by the [Vue Context Code of Conduct](CODE_OF_CONDUCT.md). By participating,
you are expected to uphold this code. Please report unacceptable behavior to [wilk.randall@gmail.com](mailto:wilk.randall@gmail.com).

## How Can I Contribute?

### Reporting Bugs

- **Ensure the bug was not already reported** by searching Github under [Issues](https://github.com/rawilk/vue-context/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/rawilk/vue-context/issues/new). Be
sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case**
demonstrating the expected behavior that is not occurring.
- Links to [CodePen](https://codepen.io), [JS Bin](https://jsbin.com), or [JsFiddle](https://jsfiddle.net) are also appreciated.
- If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).

Provide more context by answering these questions:

- **Did the problem start happening recently** (e.g. after updating to a new version of Vue Context) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version of Vue Context?** What's the most recent
version in which the problem doesn't happen? You can download older versions of Vue Context from [the releases page](https://github.com/rawilk/vue-context/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions
it normally happens.
- **Describe the environment:** What browser and version of the browser are you using? Does it happen in all browsers?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Vue Context, including completely new features and minor improvements
to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related
suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find 
out that you don't need to create one. When creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion).
Fill in [the template](https://github.com/rawilk/vue-context/blob/master/.github/ISSUE_TEMPLATE.md), including the steps that you might imagine
you would take if the feature you're requesting existed.

### Before Submitting An Enhancement Suggestion
- Check if you are using the latest version of Vue Context and if you can get the desired behavior by upgrading to that version.
- **Perform a [cursory search](https://github.com/rawilk/vue-context/issues?utf8=%E2%9C%93&q=+is%3Aissue+label%3Aenhancement+)**
to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [Github issues](https://guides.github.com/features/issues). Create an issue and provide
the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as 
[Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Vue Context
which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and 
[this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNONE/byzanz) on Linux.
- **List some other context menu projects where this enhancement exists.**
- **Specify which version of Vue Context you're using.** You can get the exact version by referencing your `package.json` file in your project.
- **Specify the browser and version your running.**

### Setup

- Clone this repo (`git clone https://github.com/rawilk/vue-context.git`)
- Make sure you have node and npm installed locally.
- `cd vue-context`
- Run `npm install` to get all dependencies installed.
- Run `npm run production` to compile the assets when you're finished.

### Pull Requests

- Fill in [the required template](https://github.com/rawilk/vue-context/blob/master/.github/PULL_REQUEST_TEMPLATE.md).
- Do not include issue numbers in the PR title.
- Include screenshots and animated GIFs in your pull request when possible.
- Update the README.md with details of changes to the API. This includes new props or any breaking changes to the existing API.


### Coding Conventions

Please follow these coding conventions when contributing to the project.

- I always terminate JavaScript statements with a semicolon.
- I ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around
hash arrows.
- I leave an empty line between code and return statements.
- I ALWAYS put spaces between properties in an object (`{ VueContext }`, not `{VueContext}`).
- I always use single quotes over double quotes, unless it makes sense to use double quotes. If that's the case, I usually prefer to
use template strings instead of double quotes (`` `${variable} some text that has a single quote ' in it` `` instead of `variable + " some text that has a single quote ' in it"`).
