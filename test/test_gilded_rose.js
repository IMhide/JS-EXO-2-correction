var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  context("Normal Item",function(){
    context('sell_in > 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Normal Item", 10, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(9);
      });

      it("decrease quality", () => {
        expect(items[0].quality).to.equal(9);
      });
    });

    context('sell_in < 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Normal Item", -1, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(-2);
      });

      it("decrease quality", () => {
        expect(items[0].quality).to.equal(8);
      });
    });
  });

  context("Aged Brie",function(){
    context('sell_in > 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Aged Brie", 10, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(9);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(11);
      });
    });

    context('sell_in < 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Aged Brie", -1, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(-2);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(12);
      });
    });
  });

  context("Sulfuras, Hand of Ragnaros",function(){
    context('sell_in > 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Sulfuras, Hand of Ragnaros", 10, 80) ]);
        items = gildedRose.updateQuality();
      });

      it("sellIn don't change", () => {
        expect(items[0].sellIn).to.equal(10);
      });

      it("quality don't change", () => {
        expect(items[0].quality).to.equal(80);
      });
    });

    context('sell_in < 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Sulfuras, Hand of Ragnaros", -1, 80) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(-1);
      });

      it("decrease quality", () => {
        expect(items[0].quality).to.equal(80);
      });
    });
  });

  context("Backstage passes to a TAFKAL80ETC concert",function(){
    context('sell_in > 10', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(14);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(11);
      });
    });

    context('sell_in > 5', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Backstage passes to a TAFKAL80ETC concert", 9, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(8);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(12);
      });
    });

    context('sell_in > 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(3);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(13);
      });
    });

    context('sell_in < 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Backstage passes to a TAFKAL80ETC concert", -1, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(-2);
      });

      it("increase quality", () => {
        expect(items[0].quality).to.equal(0);
      });
    });
  });

  context("Conjured Mana Cake",function(){
    context('sell_in > 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Conjured Mana Cake", 10, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(9);
      });

      it("decrease quality", () => {
        expect(items[0].quality).to.equal(8);
      });
    });

    context('sell_in < 0', () => {
      let items, gildedRose;

      beforeEach(() => {
        gildedRose = new Shop([ Item.for("Conjured Mana Cake", -1, 10) ]);
        items = gildedRose.updateQuality();
      });

      it("decrease sellIn", () => {
        expect(items[0].sellIn).to.equal(-2);
      });

      it("decrease quality", () => {
        expect(items[0].quality).to.equal(6);
      });
    });
  });
});
