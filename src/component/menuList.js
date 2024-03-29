import { useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const MenuList = (props) => {
    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className="border-2 shadow-md p-2">
            <div className="flex justify-between flex-6/12">
                <div className="w-9/12 pr-2">
                    <div className="font-medium">{props.list.card.info.name}</div> 
                    <div className="font-base">&#8377;{props.list.card.info.price/100 || props.list.card.info.defaultPrice/100}</div>
                    <div className="text-xs mt-5">{props.list.card.info.description}</div>
                </div>
                <div className="w-2/12">
                    <button className="absolute bg-black text-white p-1 text-xs rounded-lg"
                        // check how first to behaves
                        // onClick={addItemToCart}
                        // onClick={addItemToCart(item)}
                        onClick={() => {addItemToCart(props)}}
                        >Add +</button>
                    <img className="object-contain" src={MENU_ITEM_IMAGE + props.list.card.info.imageId}/>
                </div>
            </div>
        </div>
    ) 
};

export default MenuList;