import { PriceDispatch } from "../../types/price";
import { coincap } from "../../lib/api";
import config from '../../lib/config'
import dummy from '../../lib/dummy'
export const getPrices = () => async (dispatch: PriceDispatch) => {
    dispatch({ type: "PRICE_START" });
    try {
        config.DEBUG && console.log("PRICE START")
        const response = await coincap().get("/assets");
        dispatch({ type: "PRICE_SUCCESS", payload: response.data.data });
    } catch {

        dispatch({ type: "PRICE_CATCH", payload: dummy.coincap_res });

        dispatch({ type: "PRICE_ERROR" });
    }
};

