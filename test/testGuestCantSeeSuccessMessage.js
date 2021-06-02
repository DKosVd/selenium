import ProductPage from "../pages/productPage.js";
import { Builder } from "selenium-webdriver";

let driver = await new Builder().forBrowser("firefox").build();
async function goAddProductToBasket(
  browser,
  links = "http://selenium1py.pythonanywhere.com/ru/catalogue/the-shellcoders-handbook_209/"
) {
  try {
    let link = links;
    let page = new ProductPage(browser, link);
    await page.open();
    await page.addProductToBasket();
    let a = await page.shouldElemNotPresent();
    console.log(a);
  } catch (e) {
    console.log(e);
  } finally {
    // await browser.quit();
  }
}

goAddProductToBasket(driver);

function pause(ms) {
  return new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, ms)
  );
}
