import MainPage from "../pages/mainPage.js";
import { Builder } from "selenium-webdriver";
import LoginPage from "../pages/LoginPage.js";
let driver = await new Builder().forBrowser("firefox").build();
async function goToLoginPage(browser) {
  try {
    let link =
      "http://selenium1py.pythonanywhere.com/ru/catalogue/the-shellcoders-handbook_209/?promo=midsummer";
    let page = new MainPage(browser, link);
    let loginPage = new LoginPage(browser, link);
    await page.open();
    await page.goLoginPage();
    await pause(1000);
    let loginForm = await loginPage.shouldBeLoginForm();
    console.log("loginForm", loginForm);
    let registerForm = await loginPage.shouldBeRegisterForm();
    console.log("registerForm", registerForm);
    let loginUrl = await loginPage.shouldBeLoginUrl();
    console.log("loginUrl", loginUrl);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("FINALLY");
  }
}
goToLoginPage(driver);
function pause(ms) {
  return new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, ms)
  );
}
