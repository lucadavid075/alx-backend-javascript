export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * @returns the attributes in the following format 'name (code)''
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
