import { By, Key, until } from "selenium-webdriver";

class BasePage {
  constructor(browser, url) {
    this.browser = browser;
    this.url = url;
  }

  async open() {
    await this.browser.get(this.url);
  }

  async solveQuiz() {
    let alert = await this.browser.switchTo().alert();
    let arrayText = await alert.getText();
    let x = await arrayText.split(" ")[2];
    let answer = `${Math.log(Math.abs(12 * Math.sin(x)))}`;
    await alert.sendKeys(answer, Key.RETURN);
    await alert.accept();
  }

  async isNotElementPresent(what, timeout = 4000) {
    try {
      await this.browser.wait(until.elementLocated(By.css(what)), timeout);
      return false;
    } catch (err) {
      return true;
    }
  }

  async switchToAlert() {
    let alert = await this.browser.switchTo().alert();
    await alert.accept();
  }

  async searchElement(selector) {
    return await this.browser.findElement(By.css(selector));
  }

  async quit() {
    await this.browser.quit();
  }

  async is_element_present(what) {
    try {
      await this.browser.findElement(By.css(what));
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default BasePage;
