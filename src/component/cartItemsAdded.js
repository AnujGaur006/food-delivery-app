import { useSelector } from "react-redux";
import {MENU_ITEM_IMAGE} from "../utils/constants";

const CartItemAdded = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    if(cartItems.length === 0) return <div>Add Item to Cart</div> 

    return <div>
            {
                 cartItems.map((item, index) => 
                    <div className="border-2 shadow-md p-2 w-6/12 mx-auto">
                        <div className="flex justify-between">
                            <div className="w-9/12 pr-2 text-left">
                                <div className="font-medium">{item.list.card.info.name}</div> 
                                <div className="font-base">&#8377;{item.list.card.info.price/100 || item.list.card.info.defaultPrice/100}</div>
                                <div className="text-xs mt-5">{item.list.card.info.description}</div>
                            </div>
                            <div className="w-2/12">
                                {/* <button className="absolute bg-black text-white p-1 text-xs rounded-lg"
                                    // check how first to behaves
                                    // onClick={addItemToCart}
                                    // onClick={addItemToCart(item)}
                                    onClick={() => {addItemToCart(props)}}
                                    >Add +</button> */}
                                <img className="object-contain" src={MENU_ITEM_IMAGE + item.list.card.info.imageId}/>
                            </div>
                        </div>
                    </div>
                 )      
            }
            </div>
};

export default CartItemAdded;