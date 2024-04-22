import { Injectable } from '@angular/core';
import { Carta } from '../model/carta';
@Injectable({
  providedIn: 'root'
})

export class CartasService {

  private cartas: Carta[] = [];


  constructor() {
    this.cartas = [
      {
        "id": 34541863,
        "name": "\"A\" Cell Breeding Device",
        "type": "Spell Card",
        "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
        "race": "Continuous",
        "archetype": "Alien",
        "card_sets": [
          {
            "set_name": "Force of the Breaker",
            "set_code": "FOTB-EN043",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 34541863,
            "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.07",
            "tcgplayer_price": "0.15",
            "ebay_price": "0.99",
            "amazon_price": "24.45",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 64163367,
        "name": "\"A\" Cell Incubator",
        "type": "Spell Card",
        "desc": "Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
        "race": "Continuous",
        "archetype": "Alien",
        "card_sets": [
          {
            "set_name": "Gladiator's Assault",
            "set_code": "GLAS-EN062",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 64163367,
            "image_url": "https://images.ygoprodeck.com/images/cards/64163367.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64163367.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64163367.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.07",
            "tcgplayer_price": "0.20",
            "ebay_price": "1.25",
            "amazon_price": "0.50",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 91231901,
        "name": "\"A\" Cell Recombination Device",
        "type": "Spell Card",
        "desc": "Target 1 face-up monster on the field; send 1 \"Alien\" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 \"Alien\" monster from your Deck to your hand.",
        "race": "Quick-Play",
        "archetype": "Alien",
        "card_sets": [
          {
            "set_name": "Invasion: Vengeance",
            "set_code": "INOV-EN063",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 91231901,
            "image_url": "https://images.ygoprodeck.com/images/cards/91231901.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/91231901.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/91231901.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.14",
            "tcgplayer_price": "0.19",
            "ebay_price": "0.99",
            "amazon_price": "0.50",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 73262676,
        "name": "\"A\" Cell Scatter Burst",
        "type": "Spell Card",
        "desc": "Select 1 face-up \"Alien\" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent's face-up monsters.",
        "race": "Quick-Play",
        "archetype": "Alien",
        "card_sets": [
          {
            "set_name": "Strike of Neos",
            "set_code": "STON-EN041",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 73262676,
            "image_url": "https://images.ygoprodeck.com/images/cards/73262676.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/73262676.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/73262676.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.14",
            "tcgplayer_price": "0.10",
            "ebay_price": "2.00",
            "amazon_price": "9.76",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 98319530,
        "name": "\"Infernoble Arms - Almace\"",
        "type": "Spell Card",
        "desc": "While this card is equipped to a monster: You can equip 1 \"Infernoble Arms\" Equip Spell from your Deck or GY, except \"\"Infernoble Arms - Almace\"\", to 1 appropriate monster you control, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 of your FIRE Warrior monsters that is banished or in your GY; add it to your hand. You can only use 1 \"\"Infernoble Arms - Almace\"\" effect per turn, and only once that turn.",
        "race": "Equip",
        "archetype": "Infernoble Arms",
        "card_sets": [
          {
            "set_name": "Duelist Nexus",
            "set_code": "DUNE-EN056",
            "set_rarity": "Quarter Century Secret Rare",
            "set_rarity_code": "",
            "set_price": "0"
          },
          {
            "set_name": "Duelist Nexus",
            "set_code": "DUNE-EN056",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 98319530,
            "image_url": "https://images.ygoprodeck.com/images/cards/98319530.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/98319530.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/98319530.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.00",
            "tcgplayer_price": "0.75",
            "ebay_price": "0.00",
            "amazon_price": "0.00",
            "coolstuffinc_price": "0.00"
          }
        ]
      },
      {
        "id": 37478723,
        "name": "\"Infernoble Arms - Durendal\"",
        "type": "Spell Card",
        "desc": "While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 \"\"Infernoble Arms - Durendal\"\" effect per turn, and only once that turn.",
        "race": "Equip",
        "archetype": "Noble Knight",
        "card_sets": [
          {
            "set_name": "2021 Tin of Ancient Battles",
            "set_code": "MP21-EN136",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Amazing Defenders",
            "set_code": "AMDE-EN042",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          },
          {
            "set_name": "Rise of the Duelist",
            "set_code": "ROTD-EN053",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 37478723,
            "image_url": "https://images.ygoprodeck.com/images/cards/37478723.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/37478723.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/37478723.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.11",
            "tcgplayer_price": "0.17",
            "ebay_price": "0.99",
            "amazon_price": "2.96",
            "coolstuffinc_price": "0.00"
          }
        ]
      },
      {
        "id": 64867422,
        "name": "\"Infernoble Arms - Hauteclere\"",
        "type": "Spell Card",
        "desc": "While this card is equipped to a monster: You can target 1 face-up monster you control; this turn, you cannot declare attacks, except with that monster, also it gains the ability this turn to make a second attack during each Battle Phase, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 face-up monster on the field; destroy it. You can only use 1 \"\"Infernoble Arms - Hauteclere\"\" effect per turn, and only once that turn.",
        "race": "Equip",
        "archetype": "Noble Knight",
        "card_sets": [
          {
            "set_name": "2021 Tin of Ancient Battles",
            "set_code": "MP21-EN137",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Rise of the Duelist",
            "set_code": "ROTD-EN054",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.04"
          }
        ],
        "card_images": [
          {
            "id": 64867422,
            "image_url": "https://images.ygoprodeck.com/images/cards/64867422.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64867422.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64867422.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.09",
            "tcgplayer_price": "0.15",
            "ebay_price": "0.99",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.00"
          }
        ]
      },
      {
        "id": 90861137,
        "name": "\"Infernoble Arms - Joyeuse\"",
        "type": "Spell Card",
        "desc": "While this card is equipped to a monster: You can target 1 FIRE Warrior monster in your GY; add it to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can Special Summon 1 FIRE Warrior monster from your hand. You can only use 1 \"\"Infernoble Arms - Joyeuse\"\" effect per turn, and only once that turn.",
        "race": "Equip",
        "archetype": "Noble Knight",
        "card_sets": [
          {
            "set_name": "2021 Tin of Ancient Battles",
            "set_code": "MP21-EN138",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Rise of the Duelist",
            "set_code": "ROTD-EN055",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 90861137,
            "image_url": "https://images.ygoprodeck.com/images/cards/90861137.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/90861137.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/90861137.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.16",
            "tcgplayer_price": "0.24",
            "ebay_price": "0.99",
            "amazon_price": "0.45",
            "coolstuffinc_price": "0.00"
          }
        ]
      },
      {
        "id": 44256816,
        "name": "1st Movement Solo",
        "type": "Spell Card",
        "desc": "If you control no monsters: Special Summon 1 Level 4 or lower \"Melodious\" monster from your hand or Deck. You can only activate 1 \"1st Movement Solo\" per turn. You cannot Special Summon monsters during the turn you activate this card, except \"Melodious\" monsters.",
        "race": "Normal",
        "archetype": "Melodious",
        "card_sets": [
          {
            "set_name": "2015 Mega-Tin Mega Pack",
            "set_code": "MP15-EN169",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "The New Challengers",
            "set_code": "NECH-EN059",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "The New Challengers: Super Edition",
            "set_code": "NECH-ENS10",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "17.04"
          }
        ],
        "card_images": [
          {
            "id": 44256816,
            "image_url": "https://images.ygoprodeck.com/images/cards/44256816.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/44256816.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/44256816.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "15.92",
            "tcgplayer_price": "6.69",
            "ebay_price": "6.95",
            "amazon_price": "2.19",
            "coolstuffinc_price": "1.99"
          }
        ]
      },
      {
        "id": 11714098,
        "name": "30,000-Year White Turtle",
        "type": "Normal Monster",
        "desc": "A huge turtle that has existed for more than 30,000 years.",
        "archetype": "Melodious",
        "race": "Aqua",
        "card_sets": [
          {
            "set_name": "2015 Mega-Tin Mega Pack",
            "set_code": "MP15-EN169",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "The New Challengers",
            "set_code": "NECH-EN059",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "The New Challengers: Super Edition",
            "set_code": "NECH-ENS10",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "17.04"
          }],
        "card_images": [
          {
            "id": 11714098,
            "image_url": "https://images.ygoprodeck.com/images/cards/11714098.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/11714098.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/11714098.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.00",
            "tcgplayer_price": "0.00",
            "ebay_price": "10.00",
            "amazon_price": "0.50",
            "coolstuffinc_price": "0.00"
          }
        ]
      },
      {
        "id": 19942835,
        "name": "Zombie Reborn",
        "type": "Spell Card",
        "archetype": "Melodious",
        "desc": "Target 1 Zombie monster in either GY; banish 1 monster with the same name from your Deck or Extra Deck, and if you do, Special Summon the targeted monster to your field. If this card is in your GY: You can shuffle 1 of your banished Zombie monsters into the Deck, and if you do, Set this card, but banish it when it leaves the field. You can only use 1 \"Zombie Reborn\" effect per turn, and only once that turn.",
        "race": "Normal",
        "card_sets": [
          {
            "set_name": "25th Anniversary Tin: Dueling Heroes Mega Pack",
            "set_code": "MP23-EN098",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Dimension Force",
            "set_code": "DIFO-EN060",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 19942835,
            "image_url": "https://images.ygoprodeck.com/images/cards/19942835.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/19942835.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/19942835.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.07",
            "tcgplayer_price": "0.07",
            "ebay_price": "1.49",
            "amazon_price": "0.75",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 4145852,
        "name": "Zoodiac Ramram",
        "type": "Effect Monster",

        "desc": "If this card is destroyed by battle or card effect: You can target 1 \"Zoodiac\" monster in your GY, except \"Zoodiac Ramram\"; Special Summon it. An Xyz Monster whose original Type is Beast-Warrior and has this card as material gains this effect.\r\n● When your opponent activates a Trap Card or effect that targets this card (Quick Effect): You can detach 1 material from this card; negate the activation.",

        "race": "Beast-Warrior",

        "archetype": "Zoodiac",

        "card_sets": [
          {
            "set_name": "2017 Mega-Tin Mega Pack",
            "set_code": "MP17-EN185",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "OTS Tournament Pack 5",
            "set_code": "OP05-EN008",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Raging Tempest",
            "set_code": "RATE-EN018",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 4145852,
            "image_url": "https://images.ygoprodeck.com/images/cards/4145852.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/4145852.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/4145852.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.19",
            "tcgplayer_price": "0.22",
            "ebay_price": "3.99",
            "amazon_price": "0.59",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 78872731,
        "name": "Zoodiac Ratpier",
        "type": "Effect Monster",

        "desc": "If this card is Normal Summoned: You can send 1 \"Zoodiac\" card from your Deck to the Graveyard. An Xyz Monster whose original Type is Beast-Warrior and has this card as Xyz Material gains this effect.\n● Once per turn: You can detach 1 Xyz Material from this card; Special Summon 1 \"Zoodiac Ratpier\" from your hand or Deck.",

        "race": "Beast-Warrior",

        "archetype": "Zoodiac",

        "card_sets": [
          {
            "set_name": "2017 Mega-Tin Mega Pack",
            "set_code": "MP17-EN181",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Raging Tempest",
            "set_code": "RATE-EN014",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 78872731,
            "image_url": "https://images.ygoprodeck.com/images/cards/78872731.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/78872731.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/78872731.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.25",
            "tcgplayer_price": "0.30",
            "ebay_price": "1.33",
            "amazon_price": "0.70",
            "coolstuffinc_price": "0.99"
          }
        ]
      },
      {
        "id": 77150143,
        "name": "Zoodiac Thoroughblade",
        "type": "Effect Monster",

        "desc": "If this card is Normal or Special Summoned: You can discard 1 \"Zoodiac\" card, and if you do, draw 1 card. An Xyz Monster whose original Type is Beast-Warrior and has this card as Xyz Material gains this effect.\r\n● If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent.",

        "race": "Beast-Warrior",

        "archetype": "Zoodiac",

        "card_sets": [
          {
            "set_name": "2017 Mega-Tin Mega Pack",
            "set_code": "MP17-EN184",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          },
          {
            "set_name": "Raging Tempest",
            "set_code": "RATE-EN017",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 77150143,
            "image_url": "https://images.ygoprodeck.com/images/cards/77150143.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/77150143.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/77150143.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "1.13",
            "tcgplayer_price": "1.18",
            "ebay_price": "6.16",
            "amazon_price": "3.27",
            "coolstuffinc_price": "2.99"
          }
        ]
      },
      {
        "id": 11510448,
        "name": "Zoodiac Tigermortar",
        "type": "XYZ Monster",

        "desc": "3 Level 4 monsters\r\nOnce per turn, you can also Xyz Summon \"Zoodiac Tigermortar\" by using 1 \"Zoodiac\" monster you control with a different name as Xyz Material. (If you used an Xyz Monster, any Xyz Materials attached to it also become Xyz Materials on this card.) This card gains ATK and DEF equal to the ATK and DEF of all \"Zoodiac\" monsters attached to it as Materials. Once per turn: You can detach 1 Xyz Material from this card, then target 1 Xyz Monster you control and 1 \"Zoodiac\" monster in your Graveyard; attach that \"Zoodiac\" monster to that Xyz Monster as Xyz Material.",

        "race": "Beast-Warrior",

        "archetype": "Zoodiac",

        "card_sets": [
          {
            "set_name": "2017 Mega-Tin Mega Pack",
            "set_code": "MP17-EN207",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          },
          {
            "set_name": "Raging Tempest",
            "set_code": "RATE-EN052",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 11510448,
            "image_url": "https://images.ygoprodeck.com/images/cards/11510448.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/11510448.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/11510448.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.86",
            "tcgplayer_price": "0.84",
            "ebay_price": "1.89",
            "amazon_price": "2.22",
            "coolstuffinc_price": "1.99"
          }
        ]
      },
      {
        "id": 31755044,
        "name": "Zoodiac Whiptail",
        "type": "Effect Monster",

        "desc": "(Quick Effect): You can target 1 Beast-Warrior Xyz Monster you control; attach this card from your hand or field to it as material. An Xyz Monster whose original Type is Beast-Warrior and has this card as material gains this effect.\r\n● If this card battles an opponent's monster, after damage calculation: Banish that opponent's monster.",

        "race": "Beast-Warrior",

        "archetype": "Zoodiac",

        "card_sets": [
          {
            "set_name": "2017 Mega-Tin Mega Pack",
            "set_code": "MP17-EN183",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "OTS Tournament Pack 5",
            "set_code": "OP05-EN002",
            "set_rarity": "Ultimate Rare",
            "set_rarity_code": "(UtR)",
            "set_price": "0"
          },
          {
            "set_name": "Raging Tempest",
            "set_code": "RATE-EN016",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 31755044,
            "image_url": "https://images.ygoprodeck.com/images/cards/31755044.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/31755044.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/31755044.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.34",
            "tcgplayer_price": "0.32",
            "ebay_price": "1.44",
            "amazon_price": "0.99",
            "coolstuffinc_price": "1.99"
          }
        ]
      },
      {
        "id": 95911373,
        "name": "Zoroa, the Magistus Conflagrant Calamity",
        "type": "Synchro Monster",

        "desc": "1 Spellcaster Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can equip 1 \"Magistus\" monster from your Extra Deck to this card. Your opponent cannot activate the effects of monsters with the same card type (Fusion, Synchro, Xyz, or Link) as a \"Magistus\" Monster Card in your Spell & Trap Zone. If this card is in your GY: You can target 1 \"Magistus\" card you control; destroy it, and if you do, Special Summon this card. You can only use this effect of \"Zoroa, the Magistus Conflagrant Calamity\" once per turn.",

        "race": "Spellcaster",

        "archetype": "Magistus",

        "card_sets": [
          {
            "set_name": "2022 Tin of the Pharaoh's Gods",
            "set_code": "MP22-EN212",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Burst of Destiny",
            "set_code": "BODE-EN045",
            "set_rarity": "Secret Rare",
            "set_rarity_code": "(ScR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 95911373,
            "image_url": "https://images.ygoprodeck.com/images/cards/95911373.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/95911373.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/95911373.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.04",
            "tcgplayer_price": "0.16",
            "ebay_price": "1.89",
            "amazon_price": "0.80",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 36099130,
        "name": "Zoroa, the Magistus of Flame",
        "type": "Tuner Monster",

        "desc": "You can target 1 \"Magistus\" monster you control; equip it with 1 \"Magistus\" monster from your Extra Deck. If this card becomes equipped with a \"Magistus\" Monster Card: You can Special Summon 1 Level 4 Spellcaster monster from your hand or GY in Defense Position, except \"Zoroa, the Magistus of Flame\", but its effects are negated. You can only use each effect of \"Zoroa, the Magistus of Flame\" once per turn.",

        "race": "Spellcaster",

        "archetype": "Magistus",

        "card_sets": [
          {
            "set_name": "Genesis Impact",
            "set_code": "GEIM-EN002",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "10.93"
          }
        ],
        "card_images": [
          {
            "id": 36099130,
            "image_url": "https://images.ygoprodeck.com/images/cards/36099130.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/36099130.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/36099130.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "4.91",
            "tcgplayer_price": "4.77",
            "ebay_price": "10.00",
            "amazon_price": "0.95",
            "coolstuffinc_price": "6.99"
          }
        ]
      },
      {
        "id": 68258355,
        "name": "ZS - Armed Sage",
        "type": "Effect Monster",

        "desc": "If the only monster you control is 1 Level 4 monster not named \"ZS - Armed Sage\", you can Special Summon this card (from your hand). A \"Utopia\" Xyz Monster that was Summoned using this card on the field as material gains this effect.\r\n● If this card is Xyz Summoned: You can add 1 \"ZW -\" monster from your Deck to your hand.\r\nYou can only use this effect of \"ZS - Armed Sage\" once per turn.",

        "race": "Warrior",

        "archetype": "Zexal",

        "card_sets": [
          {
            "set_name": "2022 Tin of the Pharaoh's Gods",
            "set_code": "MP22-EN058",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Lightning Overdrive",
            "set_code": "LIOV-EN002",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 68258355,
            "image_url": "https://images.ygoprodeck.com/images/cards/68258355.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/68258355.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/68258355.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.07",
            "tcgplayer_price": "0.10",
            "ebay_price": "0.99",
            "amazon_price": "7.77",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 4647954,
        "name": "ZS - Ascended Sage",
        "type": "Effect Monster",

        "desc": "If you control no cards, you can Special Summon this card (from your hand). A \"Utopia\" Xyz Monster that was Summoned using this card on the field as material gains this effect.\r\n● If this card is Xyz Summoned: You can add 1 \"Rank-Up-Magic\" Normal Spell from your Deck to your hand.\r\nYou can only use this effect of \"ZS - Ascended Sage\" once per turn.",

        "race": "Warrior",

        "archetype": "Zexal",

        "card_sets": [
          {
            "set_name": "2022 Tin of the Pharaoh's Gods",
            "set_code": "MP22-EN059",
            "set_rarity": "Prismatic Secret Rare",
            "set_rarity_code": "(PScR)",
            "set_price": "0"
          },
          {
            "set_name": "Lightning Overdrive",
            "set_code": "LIOV-EN003",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 4647954,
            "image_url": "https://images.ygoprodeck.com/images/cards/4647954.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/4647954.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/4647954.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.20",
            "tcgplayer_price": "0.26",
            "ebay_price": "1.50",
            "amazon_price": "29.99",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 32281491,
        "name": "ZS - Ouroboros Sage",
        "type": "Effect Monster",

        "desc": "When this card is Normal Summoned: You can Special Summon 1 non-LIGHT \"Number\" monster from your GY, but negate its effects, and if you do, equip both this card and 1 \"Utopia\" monster you control to it, each as an Equip Spell that gives it 1700 ATK, also you can only declare one attack for the rest of this turn. When the monster equipped with this card by this card's effect declares an attack on your opponent's monster: You can double the attacking monster's ATK, but destroy it during the End Phase.",

        "race": "Warrior",

        "archetype": "Zexal",

        "card_sets": [
          {
            "set_name": "Brothers of Legend",
            "set_code": "BROL-EN026",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0.92"
          }
        ],
        "card_images": [
          {
            "id": 32281491,
            "image_url": "https://images.ygoprodeck.com/images/cards/32281491.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/32281491.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/32281491.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.10",
            "tcgplayer_price": "0.10",
            "ebay_price": "1.50",
            "amazon_price": "0.30",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 31123642,
        "name": "ZS - Utopic Sage",
        "type": "XYZ Monster",

        "desc": "2 Level 4 monsters\r\nYou can detach 2 materials from this card; Special Summon 1 \"ZW -\" or \"ZS -\" monster from your Deck, also for the rest of this turn, you can only attack with \"Number\" monsters, and you cannot Special Summon from the Extra Deck, except Xyz Monsters. You can only use this effect of \"ZS - Utopic Sage\" once per turn. If a \"Utopia\" or \"Utopic\" Xyz Monster(s) you control whose original Attribute is LIGHT would be destroyed by battle or card effect, except \"ZS - Utopic Sage\", you can banish this card from your field or GY instead.",

        "race": "Warrior",

        "archetype": "Zexal",

        "card_sets": [
          {
            "set_name": "Brothers of Legend",
            "set_code": "BROL-EN058",
            "set_rarity": "Secret Rare",
            "set_rarity_code": "(ScR)",
            "set_price": "1.52"
          }
        ],
        "card_images": [
          {
            "id": 31123642,
            "image_url": "https://images.ygoprodeck.com/images/cards/31123642.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/31123642.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/31123642.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.21",
            "tcgplayer_price": "0.27",
            "ebay_price": "1.24",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 51865604,
        "name": "ZS - Vanish Sage",
        "type": "Effect Monster",

        "desc": "If you control a \"Utopia\" monster: You can draw 1 card. If a monster(s) you control is banished during the Battle Phase (except during the Damage Step): You can banish this card from the field, then target 1 of those banished monsters; Special Summon that target, and if you do, banish 1 monster your opponent controls that has 3000 or less ATK. You can only use 1 \"ZS - Vanish Sage\" effect per turn, and only once that turn.",

        "race": "Warrior",

        "archetype": "Utopia",

        "card_sets": [
          {
            "set_name": "Primal Origin",
            "set_code": "PRIO-EN001",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 51865604,
            "image_url": "https://images.ygoprodeck.com/images/cards/51865604.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/51865604.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/51865604.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.11",
            "tcgplayer_price": "0.20",
            "ebay_price": "0.99",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 57036718,
        "name": "Zubaba Buster",
        "type": "Effect Monster",
        "desc": "If this card inflicts battle damage to your opponent, at the end of that Damage Step: Destroy the 1 face-up monster on the field that has the lowest ATK (your choice, if tied), and if you do, this card loses 800 ATK.",
        "race": "Warrior",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Star Pack 2014",
            "set_code": "SP14-EN019",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Star Pack 2014",
            "set_code": "SP14-EN019",
            "set_rarity": "Starfoil Rare",
            "set_rarity_code": "(SFR)",
            "set_price": "0"
          },
          {
            "set_name": "Zexal Collection Tin",
            "set_code": "ZTIN-EN020",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "1.31"
          }
        ],
        "card_images": [
          {
            "id": 57036718,
            "image_url": "https://images.ygoprodeck.com/images/cards/57036718.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/57036718.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/57036718.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.14",
            "tcgplayer_price": "0.21",
            "ebay_price": "1.25",
            "amazon_price": "5.99",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 31563350,
        "name": "Zubaba General",
        "type": "XYZ Monster",

        "desc": "2 Level 4 monsters\nOnce per turn: You can detach 1 Xyz Material from this card; equip 1 Warrior-Type monster from your hand to this card. This card gains ATK equal to the combined ATK of the monsters equipped to it by this effect.",

        "race": "Warrior",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "War of the Giants Reinforcements",
            "set_code": "WGRT-EN104",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "10.41"
          },
          {
            "set_name": "Weekly Shonen Jump July 2013 membership promotional card",
            "set_code": "JUMP-EN065",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "5.61"
          },
          {
            "set_name": "Wing Raiders",
            "set_code": "WIRA-EN044",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 31563350,
            "image_url": "https://images.ygoprodeck.com/images/cards/31563350.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/31563350.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/31563350.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.11",
            "tcgplayer_price": "0.33",
            "ebay_price": "1.95",
            "amazon_price": "3.98",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 97896503,
        "name": "Zubaba Knight",
        "type": "Effect Monster",

        "desc": "At the start of the Damage Step, if this card attacks a face-up Defense Position monster: Destroy that monster.",

        "race": "Warrior",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Battle Pack 2: War of the Giants",
            "set_code": "BP02-EN099",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Battle Pack 2: War of the Giants",
            "set_code": "BP02-EN099",
            "set_rarity": "Mosaic Rare",
            "set_rarity_code": "(MSR)",
            "set_price": "0"
          },
          {
            "set_name": "Duelist League 15 participation cards",
            "set_code": "DL15-EN008",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "6.07"
          },
          {
            "set_name": "Number Hunters",
            "set_code": "NUMH-EN016",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "1.63"
          },
          {
            "set_name": "Star Pack 2013",
            "set_code": "SP13-EN001",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Star Pack 2013",
            "set_code": "SP13-EN001",
            "set_rarity": "Starfoil Rare",
            "set_rarity_code": "(SFR)",
            "set_price": "0"
          },
          {
            "set_name": "Starter Deck: Dawn of the Xyz",
            "set_code": "YS11-EN005",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Starter Deck: Xyz Symphony",
            "set_code": "YS12-EN004",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.29"
          },
          {
            "set_name": "Super Starter: V for Victory",
            "set_code": "YS13-EN012",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 97896503,
            "image_url": "https://images.ygoprodeck.com/images/cards/97896503.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/97896503.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/97896503.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.04",
            "tcgplayer_price": "0.05",
            "ebay_price": "0.99",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 23720856,
        "name": "Zubababancho Gagagacoat",
        "type": "Effect Monster",

        "desc": "If you control a \"Zubaba\" or \"Gagaga\" monster except \"Zubababancho Gagagacoat\", while this card is in your hand: You can Special Summon this card. You can target 1 \"Gogogo\" or \"Dododo\" monster in your GY; Special Summon it, also you cannot Special Summon monsters from the Extra Deck for the rest of this turn, except Xyz Monsters. You can only use each effect of \"Zubababancho Gagagacoat\" once per turn.",

        "race": "Warrior",

        "archetype": "Gagaga",
        "card_sets": [
          {
            "set_name": "Legendary Duelists: Magical Hero",
            "set_code": "LED6-EN035",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "1.63"
          },
          {
            "set_name": "Legendary Duelists: Season 3",
            "set_code": "LDS3-EN125",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0.92"
          }
        ],
        "card_images": [
          {
            "id": 23720856,
            "image_url": "https://images.ygoprodeck.com/images/cards/23720856.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/23720856.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/23720856.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.16",
            "tcgplayer_price": "0.18",
            "ebay_price": "0.99",
            "amazon_price": "0.99",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 43256007,
        "name": "Zuijin of the Ice Barrier",
        "type": "Effect Monster",

        "desc": "You can Tribute this card; Special Summon 1 Level 5 or higher \"Ice Barrier\" monster from your hand. If this card is in your GY, except the turn it was sent there: You can target 1 Level 3 or higher WATER monster you control; reduce its Level by exactly 2, and if you do, Special Summon this card, but banish it when it leaves the field. You can only use each effect of \"Zuijin of the Ice Barrier\" once per turn.",

        "race": "Warrior",

        "archetype": "Ice Barrier",

        "card_sets": [
          {
            "set_name": "Structure Deck: Freezing Chains",
            "set_code": "SDFC-EN005",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "1.42"
          }
        ],
        "card_images": [
          {
            "id": 43256007,
            "image_url": "https://images.ygoprodeck.com/images/cards/43256007.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/43256007.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/43256007.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.27",
            "tcgplayer_price": "0.20",
            "ebay_price": "0.99",
            "amazon_price": "0.44",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 7459013,
        "name": "Zure, Knight of Dark World",
        "type": "Normal Monster",

        "desc": "The name of this illustrious knight is known by all residents of Dark World. He never oppresses the commoners.",

        "race": "Fiend",

        "archetype": "Dark World",

        "card_sets": [
          {
            "set_name": "Dark Revelation Volume 4",
            "set_code": "DR04-EN061",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.46"
          },
          {
            "set_name": "Elemental Energy",
            "set_code": "EEN-EN001",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Gates of the Underworld Structure Deck",
            "set_code": "SDGU-EN004",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.15"
          },
          {
            "set_name": "Speed Duel GX: Duelists of Shadows",
            "set_code": "SGX3-ENI12",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Starter Deck: Syrus Truesdale",
            "set_code": "YSDS-EN008",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.28"
          },
          {
            "set_name": "Structure Deck: Dark World",
            "set_code": "SR13-EN016",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 7459013,
            "image_url": "https://images.ygoprodeck.com/images/cards/7459013.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/7459013.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/7459013.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.02",
            "tcgplayer_price": "0.10",
            "ebay_price": "0.99",
            "amazon_price": "1.06",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 67547370,
        "name": "Zushin the Sleeping Giant",
        "type": "Effect Monster",

        "desc": "Cannot be Normal Summoned/Set. Must be Special Summoned (from your hand) by Tributing a monster you control with 10 Zushin Counters, and cannot be Special Summoned by other ways. Once per turn: You can reveal this card in your hand, then target 1 Level 1 Normal Monster you control (keep this card revealed until the end of this turn); place 1 Zushin Counter on it. Unaffected by other cards' effects. If this card battles a monster, during damage calculation: ATK and DEF of this card become equal to the current ATK of the monster it is battling +1000, during that damage calculation only.",

        "race": "Warrior",
        "archetype": "Utopia",

        "card_sets": [
          {
            "set_name": "Dragons of Legend: The Complete Series",
            "set_code": "DLCS-EN114",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.93"
          },
          {
            "set_name": "Dragons of Legend: Unleashed",
            "set_code": "DRL3-EN018",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "1.75"
          }
        ],
        "card_images": [
          {
            "id": 67547370,
            "image_url": "https://images.ygoprodeck.com/images/cards/67547370.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/67547370.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/67547370.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.11",
            "tcgplayer_price": "0.08",
            "ebay_price": "0.99",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 24454387,
        "name": "Zuttomozaurus",
        "type": "Effect Monster",
        "desc": "While you control another Dinosaur monster, your opponent's monsters cannot target this card for attacks. You can target 1 other card you control; destroy it. You can only use this effect of \"Zuttomozaurus\" once per turn.",

        "race": "Dinosaur",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Duelist Nexus",
            "set_code": "DUNE-EN081",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 24454387,
            "image_url": "https://images.ygoprodeck.com/images/cards/24454387.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/24454387.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/24454387.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.10",
            "tcgplayer_price": "0.08",
            "ebay_price": "0.00",
            "amazon_price": "0.00",
            "coolstuffinc_price": "0.25"
          }
        ]
      },
      {
        "id": 40941889,
        "name": "ZW - Asura Strike",
        "type": "Effect Monster",

        "desc": "You can target 1 \"Utopia\" monster you control; equip this monster from your hand or your side of the field to that target. It gains 1000 ATK. While this card is equipped to a monster, that monster can attack all monsters your opponent controls once each. You can only control 1 \"ZW - Asura Strike\".",

        "race": "Fairy",

        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Legacy of the Valiant",
            "set_code": "LVAL-EN002",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 40941889,
            "image_url": "https://images.ygoprodeck.com/images/cards/40941889.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/40941889.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/40941889.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.33",
            "tcgplayer_price": "0.31",
            "ebay_price": "1.60",
            "amazon_price": "1.33",
            "coolstuffinc_price": "1.99"
          }
        ]
      },
      {
        "id": 2896663,
        "name": "ZW - Dragonic Halberd",
        "type": "XYZ Monster",

        "desc": "2 Level 5 monsters\r\nCannot attack directly. Once per turn: You can detach 1 material from this card; add 1 \"Zexal\" Spell/Trap from your Deck to your hand. You can target 1 \"Utopia\" monster you control; equip this card you control to it. It gains 3000 ATK. When the equipped monster destroys a monster by battle: You can Special Summon to your field any number of \"ZW -\" Monster Cards equipped to it.",

        "race": "Dragon",
        "archetype": "Zexal",

        "card_sets": [
          {
            "set_name": "2022 Tin of the Pharaoh's Gods",
            "set_code": "MP22-EN082",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          },
          {
            "set_name": "Lightning Overdrive",
            "set_code": "LIOV-EN040",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 2896663,
            "image_url": "https://images.ygoprodeck.com/images/cards/2896663.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/2896663.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/2896663.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.08",
            "tcgplayer_price": "0.08",
            "ebay_price": "0.99",
            "amazon_price": "0.73",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 29353756,
        "name": "ZW - Eagle Claw",
        "type": "Effect Monster",

        "desc": "If your opponent's Life Points are at least 2000 higher than yours, you can Special Summon this card (from your hand). You can target 1 \"Utopia\" monster you control; equip this monster on the field to that target. It gains 2000 ATK. Once per turn, while this card is equipped to a monster, when a Trap Card or Trap effect that was activated on your opponent's side of the field resolves, negate the effects of that card. You can only control 1 \"ZW - Eagle Claw\".",

        "race": "Winged Beast",

        "archetype": "Utopia",

        "card_sets": [
          {
            "set_name": "King's Court",
            "set_code": "KICO-EN037",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "1.18"
          },
          {
            "set_name": "Super Starter Power-Up Pack",
            "set_code": "YS13-ENV03",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 29353756,
            "image_url": "https://images.ygoprodeck.com/images/cards/29353756.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/29353756.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/29353756.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.10",
            "tcgplayer_price": "0.04",
            "ebay_price": "0.99",
            "amazon_price": "1.50",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 60992364,
        "name": "ZW - Leo Arms",
        "type": "XYZ Monster",
        "desc": "2 Level 5 monsters\nThis card cannot attack your opponent directly. Once per turn: You can detach 1 Xyz Material from this card; add 1 \"ZW -\" monster from your Deck to your hand. You can target 1 \"Utopia\" monster you control; equip this monster on the field to that target. It gains 3000 ATK. During your Battle Phase, if a monster attacked this turn while equipped with this card: You can send this Equip Card to the Graveyard; the monster that was equipped with this card can make a second attack, on an opponent's monster, during this Battle Phase.",

        "race": "Beast",

        "archetype": "Utopia",

        "card_sets": [
          {
            "set_name": "Cosmo Blazer",
            "set_code": "CBLZ-EN047",
            "set_rarity": "Ultimate Rare",
            "set_rarity_code": "(UtR)",
            "set_price": "0"
          },
          {
            "set_name": "Cosmo Blazer",
            "set_code": "CBLZ-EN047",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "0"
          },
          {
            "set_name": "King's Court",
            "set_code": "KICO-EN047",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0.93"
          }
        ],
        "card_images": [
          {
            "id": 60992364,
            "image_url": "https://images.ygoprodeck.com/images/cards/60992364.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/60992364.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/60992364.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.09",
            "tcgplayer_price": "0.05",
            "ebay_price": "3.95",
            "amazon_price": "6.85",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 45082499,
        "name": "ZW - Lightning Blade",
        "type": "Effect Monster",
        "desc": "You can target 1 \"Utopia\" monster you control; equip this monster from your hand or your side of the field to that target. It gains 1200 ATK. While this card is equipped to a monster, face-up \"ZW -\" cards you control cannot be destroyed by your opponent's card effects. If a monster equipped with this card would be destroyed by a card effect, destroy this card instead. You can only control 1 face-up \"ZW - Lightning Blade\".",
        "race": "Beast",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Cosmo Blazer",
            "set_code": "CBLZ-EN005",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 45082499,
            "image_url": "https://images.ygoprodeck.com/images/cards/45082499.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/45082499.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/45082499.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "3.57",
            "tcgplayer_price": "1.17",
            "ebay_price": "2.96",
            "amazon_price": "5.78",
            "coolstuffinc_price": "1.99"
          }
        ]
      },
      {
        "id": 32164201,
        "name": "ZW - Pegasus Twin Saber",
        "type": "Effect Monster",
        "desc": "You can only control 1 \"ZW - Pegasus Twin Saber\". If your opponent's LP are at least 2000 higher than yours, you can Special Summon this card (from your hand). You can target 1 \"Utopia\" monster you control; equip this card you control to it as an Equip Spell that gives it 1000 ATK. Once per turn, while this card is equipped to a monster, you can negate a monster effect activated on your opponent's field.",
        "race": "Beast",
        "archetype": "Saber",
        "card_sets": [
          {
            "set_name": "2022 Tin of the Pharaoh's Gods",
            "set_code": "MP22-EN057",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "0"
          },
          {
            "set_name": "Lightning Overdrive",
            "set_code": "LIOV-EN001",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 32164201,
            "image_url": "https://images.ygoprodeck.com/images/cards/32164201.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/32164201.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/32164201.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.09",
            "tcgplayer_price": "0.09",
            "ebay_price": "0.99",
            "amazon_price": "0.59",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 87008374,
        "name": "ZW - Phoenix Bow",
        "type": "Effect Monster",
        "desc": "You can target 1 face-up \"Number C39: Utopia Ray\" you control; equip this card from your hand to that target. It gains 1100 ATK. When the equipped monster destroys an opponent's monster by battle: Inflict 1000 damage to your opponent. You can only control 1 face-up \"ZW - Phoenix Bow\".",
        "race": "Winged Beast",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Return of the Duelist",
            "set_code": "REDU-EN003",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 87008374,
            "image_url": "https://images.ygoprodeck.com/images/cards/87008374.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/87008374.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/87008374.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.20",
            "tcgplayer_price": "0.22",
            "ebay_price": "0.99",
            "amazon_price": "0.98",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 2648201,
        "name": "ZW - Sleipnir Mail",
        "type": "Effect Monster",
        "desc": "You can target 1 \"Utopia\" monster you control; equip this monster from your hand or your side of the field to that target. It gains 1000 ATK. When this card you control is sent to your Graveyard because the equipped monster was destroyed by your opponent's card (by battle or card effect): You can target 1 \"Utopia\" monster in your Graveyard; Special Summon that target. You can only control 1 \"ZW - Sleipnir Mail\".",
        "race": "Beast",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Primal Origin",
            "set_code": "PRIO-EN096",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 2648201,
            "image_url": "https://images.ygoprodeck.com/images/cards/2648201.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/2648201.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/2648201.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.11",
            "tcgplayer_price": "0.22",
            "ebay_price": "0.99",
            "amazon_price": "0.49",
            "coolstuffinc_price": "0.99"
          }
        ]
      },
      {
        "id": 95886782,
        "name": "ZW - Sylphid Wing",
        "type": "Effect Monster",
        "desc": "You can only control 1 \"ZW - Sylphid Wing\". You can target 1 \"Utopia\" monster you control; equip this card from your hand or field to it. It gains 800 ATK. Once per turn, if a monster(s) is Special Summoned by your opponent's activated effect: You can make the equipped monster gain 1600 ATK. (This ATK gain remains even if this card leaves the field or the monster becomes unaffected by card effects.) If you activate the equipped monster's effect by detaching its material, you can send this card to the GY instead of 1 of those materials.",
        "race": "Beast",
        "archetype": "Zexal",
        "card_sets": [
          {
            "set_name": "Brothers of Legend",
            "set_code": "BROL-EN025",
            "set_rarity": "Ultra Rare",
            "set_rarity_code": "(UR)",
            "set_price": "1.2"
          }
        ],
        "card_images": [
          {
            "id": 95886782,
            "image_url": "https://images.ygoprodeck.com/images/cards/95886782.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/95886782.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/95886782.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.09",
            "tcgplayer_price": "0.12",
            "ebay_price": "1.50",
            "amazon_price": "0.30",
            "coolstuffinc_price": "0.39"
          }
        ]
      },
      {
        "id": 81471108,
        "name": "ZW - Tornado Bringer",
        "type": "Effect Monster",
        "desc": "You can target 1 \"Utopia\" monster you control; equip this monster from your hand or your side of the field to that target. It gains 1300 ATK. While this card is equipped to a monster, your opponent cannot target that monster with card effects. If a monster equipped with this card would be destroyed by battle, destroy this card instead. You can only control 1 face-up \"ZW - Tornado Bringer\".",
        "race": "Dragon",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Cosmo Blazer",
            "set_code": "CBLZ-EN006",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          },
          {
            "set_name": "King's Court",
            "set_code": "KICO-EN035",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0.91"
          }
        ],
        "card_images": [
          {
            "id": 81471108,
            "image_url": "https://images.ygoprodeck.com/images/cards/81471108.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/81471108.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/81471108.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.12",
            "tcgplayer_price": "0.08",
            "ebay_price": "0.99",
            "amazon_price": "1.23",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 18865703,
        "name": "ZW - Ultimate Shield",
        "type": "Effect Monster",
        "desc": "When this card is Normal or Special Summoned: You can target 1 of your banished Xyz Monsters; Special Summon that target in face-up Defense Position. You can target 1 \"Utopia\" monster you control; equip this monster on the field to that target. It gains 2000 DEF. You can only control 1 face-up \"ZW - Ultimate Shield\".",
        "race": "Aqua",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Cosmo Blazer",
            "set_code": "CBLZ-EN007",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "King's Court",
            "set_code": "KICO-EN036",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0.87"
          }
        ],
        "card_images": [
          {
            "id": 18865703,
            "image_url": "https://images.ygoprodeck.com/images/cards/18865703.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/18865703.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/18865703.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.05",
            "tcgplayer_price": "0.04",
            "ebay_price": "0.99",
            "amazon_price": "0.20",
            "coolstuffinc_price": "0.49"
          }
        ]
      },
      {
        "id": 76080032,
        "name": "ZW - Unicorn Spear",
        "type": "Effect Monster",
        "desc": "You can target 1 \"Number C39: Utopia Ray\" you control; equip this card from your hand to that target. It gains 1900 ATK. If the equipped monster battles an opponent's monster, the opponent's monster's effect is negated during the Battle Phase only. You can only control 1 \"ZW - Unicorn Spear\".",
        "race": "Beast",
        "archetype": "Utopia",
        "card_sets": [
          {
            "set_name": "Order of Chaos",
            "set_code": "ORCS-EN005",
            "set_rarity": "Rare",
            "set_rarity_code": "(R)",
            "set_price": "0"
          },
          {
            "set_name": "Star Pack 2014",
            "set_code": "SP14-EN004",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          },
          {
            "set_name": "Star Pack 2014",
            "set_code": "SP14-EN004",
            "set_rarity": "Starfoil Rare",
            "set_rarity_code": "(SFR)",
            "set_price": "0"
          },
          {
            "set_name": "Super Starter: V for Victory",
            "set_code": "YS13-EN018",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "0"
          }
        ],
        "card_images": [
          {
            "id": 76080032,
            "image_url": "https://images.ygoprodeck.com/images/cards/76080032.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/76080032.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/76080032.jpg"
          }
        ],
        "card_prices": [
          {
            "cardmarket_price": "0.08",
            "tcgplayer_price": "0.16",
            "ebay_price": "0.99",
            "amazon_price": "0.25",
            "coolstuffinc_price": "0.39"
          }
        ]
      }]
}
getAllCartas(): Carta[] {
  return this.cartas;
}
getCartasNombre(name: string): Carta | undefined {
  return this.cartas.find((item: Carta) => {
    return item.name == name;
  });
}
getAllCartasNombre(name: string): Carta[] | undefined {
  return this.cartas.filter((item: Carta) => {
    return item.name.includes(name);
  });
}
}
