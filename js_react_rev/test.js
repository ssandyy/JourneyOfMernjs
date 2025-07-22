function shoppingList(props) {
  const { items } = props;
  
  console.log("Shopping List:");
  items.forEach((item) => {
    console.log(`- ${item.name}`);
  });
}

const itemsList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Lemon" },
  { id: 11, name: "Lime" },
  { id: 12, name: "Mango" },
  { id: 13, name: "Melon" },
  { id: 14, name: "Nectarine" },
  { id: 15, name: "Orange" },
  { id: 16, name: "Papaya" },
  { id: 17, name: "Peach" },
  { id: 18, name: "Pear" },
  { id: 19, name: "Pineapple" },
  { id: 20, name: "Plum" },
  { id: 21, name: "Raspberry" },
  { id: 22, name: "Strawberry" },
  { id: 23, name: "Tangerine" },
  { id: 24, name: "Watermelon" },
  { id: 25, name: "Xigua" },
  { id: 26, name: "Yuzu" },
  { id: 27, name: "Zucchini" },
];

shoppingList({ items: itemsList });

