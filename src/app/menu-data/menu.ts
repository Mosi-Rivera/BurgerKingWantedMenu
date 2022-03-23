export const BK_MENU : I_BK_MENU = {
    BURGERS: [
      {
        name: "WHOPPER MELT",
        description: 'The new Whopper Melt from Burger King® features two slices of toast, layered with ¼. lb of flame-grilled beef, melty American cheese, caramelized onions and stacker sauce.',
        calories: '604 Cal',
        price: 4.29,
        img_src: 'assets/images/burgers/whopper-melt.png'
      },
      {
        name: "WHOPPER",
        description: 'Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        calories: '669 Cal',
        price: 4.29,
        img_src: 'assets/images/burgers/whopper.png'
      },
      {
        name: 'Bacon King',
        description: 'Our Bacon King Sandwich features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.',
        calories: '1,359 Cal',
        price: 6.99,
        img_src: 'assets/images/burgers/bacon-king.png'
      },
      {
        name: 'Impossible™ Whopper',
        description: 'Features a flame-grilled patty made from plants topped with tomatoes, lettuce, mayo, ketchup, pickles, and onions. *Patty cooked on the same broiler as beef patties.',
        calories: '626 Cal',
        price: 5.49,
        img_src: 'assets/images/burgers/impossible-whopper.png'
      },
      {
        name: 'Double Whopper',
        description: 'Our Double Whopper Sandwich is a pairing of two ¼ lb* savory flame-grilled beef patties topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        calories: '919 Cal',
        price: 5.29,
        img_src: 'assets/images/burgers/double-whopper.png'
      },
      {
        name: 'Single Quarter Pound King',
        description: 'Our Quarter Pound KING™ Sandwich has over ¼ lb.* of flame-grilled 100% beef, topped with all of our classic favorites: American cheese, freshly sliced onions, zesty pickles, ketchup, & mustard all on a toasted sesame seed bun.',
        calories: '681 Cal',
        price: 5.18,
        img_src: 'assets/images/burgers/quarter-pounder.png'
      }
    ],
    SWEETS: [
      {
        name: "HERSHEY'S Sundae Pie",
        description: 'Say hello to our HERSHEY’S® Sundae Pie. One part crunchy chocolate crust and one part chocolate crème filling, garnished with a delicious topping and real HERSHEY’S® Chocolate Chips.The HERSHEY’S® trademark and trade dress are used under license.',
        calories: '295 Cal Cal',
        price: 1.69,
        img_src: 'assets/images/sweets/sundae-pie.png'
      },
      {
        name: 'Chocolate Chip Cookie',
        description: '2 pieces.',
        calories: '329 Cal',
        price: 1,
        img_src: 'assets/images/sweets/cookie.png'
      },
      {
        name: 'Soft Serve Cone',
        description: "We didn't invent soft serve, but with one taste of our cool, creamy, and velvety Vanilla Soft Serve, you'll think we perfected it. Served in a cup.",
        calories: '201  Cal',
        price: 1.00,
        img_src: 'assets/images/sweets/soft-serve-cone.png'
      },
    ],
    SIDES: [
      {
        name: 'Classic Fries',
        description: 'Sizes: value, small, medium and large.',
        calories: '312-604 Cal',
        price: 1.39,
        img_src: 'assets/images/sides/classic-fries.png'
      },
      {
        name: 'Onion Rings',
        description: 'Sizes: value, small, medium and large.',
        calories: '204-524 Cal',
        price: 1.39,
        img_src: 'assets/images/sides/onion-rings.png'
      },
      {
        name: 'Mozzarella Sticks 4 Piece',
        description: 'Try our delicious Mozzarella cheese sticks. Served with marinara dipping sauce, Mozzarella sticks are always a great snack',
        calories: '328 Cal',
        price: 2.79,
        img_src: 'assets/images/sides/mozarella-sticks.png'
      },
    ]
  }
  
export interface I_BK_MENU
{
  SIDES: Array<I_MENU_ITEM>;
  BURGERS: Array<I_MENU_ITEM>;
  SWEETS: Array<I_MENU_ITEM>;
}

export interface I_MENU_ITEM
{
  name: string;
  description: string;
  calories: string;
  price: number;
  img_src: string;
}