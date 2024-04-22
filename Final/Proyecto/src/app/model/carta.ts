export interface Carta {
    id: number;
    name: string;
    type: string;
    desc: string;
    race: string;
    archetype: string;
    card_sets: {
      set_name: string;
      set_code: string;
      set_rarity: string;
      set_rarity_code: string;
      set_price: string;
    }[];
    card_images: {
      id: number;
      image_url: string;
      image_url_small: string;
      image_url_cropped: string;
    }[];
    card_prices: {
      cardmarket_price: string;
      tcgplayer_price: string;
      ebay_price: string;
      amazon_price: string;
      coolstuffinc_price: string;
    }[];
  }