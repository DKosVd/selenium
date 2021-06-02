import BasePage from "./basePage.js";

class ProductPage extends BasePage {
  constructor(browser, url) {
    super(browser, url);
  }

  async shoulEqualNameProduct() {
    let name = await this.searchElement(".product_main h1");
    let textName = await name.getText();
    let nameProduct = await this.searchElement(".alertinner strong");
    let textNameProduct = await nameProduct.getText();
    console.log(`${textName} === ${textNameProduct}`);
    return textName === textNameProduct;
  }

  async shouldElemNotPresent() {
    return await this.isNotElementPresent(".alert-success");
  }

  async shouldEqualPriceProduct() {
    let price = await this.searchElement(".alertinner p strong");
    let priceProduct = await this.searchElement(".product_main > .price_color");
    let valuePrice = await price.getText();
    let valuePriceProduct = await priceProduct.getText();
    console.log(`${valuePrice} === ${valuePriceProduct}`);
    return valuePrice === valuePriceProduct;
  }

  async addProductToBasket() {
    let elem = await this.searchElement(".btn-add-to-basket");
    await elem.click();
  }
}

export default ProductPage;
