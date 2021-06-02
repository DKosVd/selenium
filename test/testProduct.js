import { Builder } from "selenium-webdriver";
import ProductPage from "../pages/productPage.js";

const map = [
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer0",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer1",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer2",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer3",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer4",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer5",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer6",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer7",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer8",
  "http://selenium1py.pythonanywhere.com/catalogue/coders-at-work_207/?promo=offer9",
];

let driver = await new Builder().forBrowser("firefox").build();
async function goAddProductToBasket(browser, links) {
  try {
    let link = links;
    let page = new ProductPage(browser, link);
    await page.open();
    await page.addProductToBasket();
    await page.solveQuiz();
    await pause(2000);
    await page.switchToAlert();
    await pause(2500);
    let equalName = await page.shoulEqualNameProduct();
    console.log(equalName);
    let equalPrice = await page.shouldEqualPriceProduct();
    console.log(equalPrice);
  } catch (e) {
    console.log(e.name);
  } finally {
    // await browser.quit();
  }
}

async function goAddProductToBaskets(browser, links) {
  try {
    let link = links;
    let page = new ProductPage(browser, link);
    await page.open();
    await page.addProductToBasket();
    await page.solveQuiz();
    await pause(2000);
    let equalName = await page.shoulEqualNameProduct();
    console.log(equalName);
    if (!equalName) {
      // await page.quit();
      return new Promise((res) => res(links));
    }
  } catch (e) {
    console.log(e.name);
  } finally {
    // await browser.quit();
  }
}

async function solution() {
  let arr = [];
  for (let i = 0; i < map.length; i++) {
    let a = await goAddProductToBaskets(driver, map[i]);
    arr.push(a);
  }
  console.log(arr);
}

solution();

// goAddProductToBasket(
//   driver,
//   "http://selenium1py.pythonanywhere.com/ru/catalogue/coders-at-work_207/?promo=newYear2019"
// );

function pause(ms) {
  return new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, ms)
  );
}
