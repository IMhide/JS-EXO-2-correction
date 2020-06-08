class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}

  static for(name, sellIn, quality){
    switch (name){
      case 'Aged Brie':
        return new AgedBrieItem(name, sellIn, quality)
        break;
      case 'Sulfuras, Hand of Ragnaros':
        return new Item(name,sellIn,quality)
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstageItem(name, sellIn, quality)
        break;
      case 'Conjured Mana Cake':
        return new ConjuredItem(name, sellIn, quality)
        break;
      default:
        return new DefaultItem(name, sellIn, quality)
        break;
    }
  }
}

class DefaultItem extends Item{
  updateQuality() {
    this.sellIn -= 1
    this.quality -= 1
    if (this.sellIn < 0)
      this.quality -= 1
  }
}

class AgedBrieItem extends Item{
  updateQuality() {
    this.sellIn -= 1
    this.quality += 1
    if (this.sellIn < 0)
      this.quality += 1
  }
}

class ConjuredItem extends Item{
  updateQuality() {
    this.sellIn -= 1
    this.quality -= 2
    if (this.sellIn < 0)
      this.quality -= 2
  }
}

class BackstageItem extends Item{
  updateQuality(){
    this.sellIn -= 1
    if (this.sellIn < 0) { return this.quality = 0 }
    if (this.sellIn < 5) { this.quality += 1 }
    if (this.sellIn < 10) { this.quality += 1 }
    this.quality += 1
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    return this.items.map((item) => {
      item.updateQuality()
      return item
    })
  };
}

module.exports = {
  Item,
  Shop
}
