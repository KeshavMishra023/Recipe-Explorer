"use client";

import { useCart } from "@/context/CartContext";
import InfoCard from "@/components/ui/InfoCard";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  return (
    <>
      <div className="max-w-375 mx-auto p-6 bg-white mt-6 rounded-xl shadow-sm">
        {cart.length === 0 && (
          <InfoCard
            imageSrc="/empty_cart_image.webp"
            title="Your Cart is Empty"
            subtitle="You haven't added any recipes yet"
            description="Looks like you haven't added any recipes to your cart. Browse our delicious recipes and add your favorites to get started!"
            buttonText="Explore Recipes"
            buttonHref="/"
          />
        )}

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-4">
            <div>
              <h2 className="font-medium">{item.name}</h2>
              <p>Qty: {item.quantity}</p>
            </div>

            <div className="flex gap-4 items-center">
              <button
                className="cursor-pointer text-2xl"
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>
              <button
                className="cursor-pointer text-2xl"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
              <div>
                <button
                  className="cursor-pointer text-[17px] text-white bg-red-400 px-4 py-2 rounded-xl"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 font-semibold flex justify-between border-t border-gray-300 pt-3">
          Total: <p><span>&#8377; </span> <span className="text-yellow-500">{total}</span></p>
        </div>
      </div>
    </>
  );
}
