const base =
  require("@playwright/test");

const {
  AppPage
} = require("../pages/AppPage");


const test =
  base.test.extend({

    app: async ({ page }, use) => {

      const app =
        new AppPage(page);

      await page.goto("/");

      await use(app);
    }

  });


module.exports = {
  test,
  expect: base.expect
};