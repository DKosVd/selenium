import BasePage from "./basePage.js";
import { By } from "selenium-webdriver";

class MainPage extends BasePage {
  constructor(browser, url) {
    super(browser, url);
  }

  async goLoginPage() {
    let loginLink = await this.browser.findElement(By.id("registration_link"));
    loginLink.click();
  }

  async shouldBeLoginLink() {
    return await this.is_element_present("#login_link");
  }
}

export default MainPage;
