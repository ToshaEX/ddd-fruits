class FruitItemDO {
  private name: string;
  private description: string;
  private limit: string;

  constructor(name: string, description: string, limit: string) {
    this.name = name;
    this.description = description;
    this.limit = limit;
  }

  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getLimit() {
    return this.limit;
  }
}
