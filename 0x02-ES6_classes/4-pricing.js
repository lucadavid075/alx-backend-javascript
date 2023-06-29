import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  
  /**
   * gets the amount
   */
  get amount() {
    return this._amount;
  }
  
  /**
   * sets the amount
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * gets the Currency
   */
  get currency() {
    return this._currency;
  }

  /**
   * sets the Currency value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }
  
  /**
   * returns the attributes in the following format 'amount currency_name (currency_code)'
   */
   displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }
  
  /**
   * static method
   * @amount - amount in number to be coverted
   * @conversionRate - rate at which the amount is converted
   * return the amount multiplied by the conversion rate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
