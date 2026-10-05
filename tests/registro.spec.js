const {
  test,
  expect
} = require("../fixtures/test-fixtures");


test(
  "Registrar nuevo usuario",
  async ({ app, page }) => {

    await app.login();

    await app.registrar(
      "Carlos",
      "carlos@test.com"
    );

    await expect(
      page.getByText(
        "Usuario registrado correctamente"
      )
    ).toBeVisible();

  }
);