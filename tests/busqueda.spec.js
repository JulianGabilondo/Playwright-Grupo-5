const {
  test,
  expect
} = require("../fixtures/test-fixtures");


test(
  "Buscar usuario existente",
  async ({ app, page }) => {

    await app.login();

    await app.buscar("Juan");

    await expect(
      page.getByText("Juan - juan@test.com")
    ).toBeVisible();

  }
);