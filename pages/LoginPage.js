import BasePage from "./basePage.js";

class LoginPage extends BasePage {
  constructor(browser, url) {
    super(browser, url);
  }

  async shouldBeLoginUrl() {
    let url = await this.browser.getCurrentUrl();
    return `${url}`.split("/").includes("login");
  }

  async shouldBeLoginForm() {
    return await this.is_element_present("#login_form");
  }

  async shouldBeRegisterForm() {
    return await this.is_element_present("#register_form");
  }
}

export default LoginPage;
