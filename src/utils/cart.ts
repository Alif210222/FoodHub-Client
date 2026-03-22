export const getCart = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart: any[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (meal: any) => {
  const cart = getCart();

  const exist = cart.find((item: any) => item.id === meal.id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      quantity: 1,
    });
  }

  saveCart(cart);
};

export const removeFromCart = (id: string) => {
  const cart = getCart().filter((item: any) => item.id !== id);
  saveCart(cart);
};

export const updateQuantity = (id: string, quantity: number) => {
  const cart = getCart().map((item: any) =>
    item.id === id ? { ...item, quantity } : item
  );
  saveCart(cart);
};