# GoodData Homework

## Prerequisites

To successfully complete this tutorial, you are required to:

* Be familiar with the modern JavaScript ecosystem.
* Have `node.js` and `yarn` installed in your development environment.
  * If you do not have these tools installed, you can get them from https://nodejs.org/ (install first) and https://yarnpkg.com/ respectively.
* Have an account on the GoodData platform.
  * If you do not have a GoodData account yet, [create a trial one](https://secure.gooddata.com/account.html?lastUrl=%252F#/registration/projectTemplate/urn%253Agooddata%253AOnboardingProductTour).

## Initialization

1. Run `git clone git@github.com:BugsBunny338/gooddata-homework.git`
2. Run `cd gooddata-homework`
3. Run `yarn install`
4. Run `HTTPS=true yarn start`
5. Visit https://localhost:3000/account.html and log in using your GoodData account credentials
   - If you do not have a GoodData account yet, [create a trial one](https://secure.gooddata.com/account.html?lastUrl=%252F#/registration/projectTemplate/urn%253Agooddata%253AOnboardingProductTour).
6. Visit https://localhost:3000/ and check that two column charts are loaded

![Screenshot after initialization](https://github.com/BugsBunny338/gooddata-homework/blob/master/public/screen.png "Initialization Screenshot")

## Task

__Make the dropdown work, i.e. dropdown onChange reloads the upper chart appropriately.__

When you're done, send us a link to the source code repo, and also a link to deployed version of your solution.

---

We are looking for re-usable code. You are strongly encouraged to "over engineer" this in order to show off your software architecture and designing skills. Assume that this abstract application will be the start of a large scale application.

## Documentation

http://sdk.gooddata.com/gooddata-js/

## Troubleshooting

###### Charts don't get loaded.
  * You're most probably not logged in correctly. Check the Network tab in Google Chrome DevTools and if you see HTTP 401 ERROR, make sure to visit https://localhost:3000/account.html and log in properly.

###### Anything else?
* Contact your recruiter for further information.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
