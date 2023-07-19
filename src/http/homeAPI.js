import { $host } from "./index";
import { FETCH_RANDOM_NUMBER } from "../reducers";

export const fetchRandomNumber = () => {
	return async (dispatch) => {
		const { data } = await $host.get('api/home/number')
		dispatch({ type: FETCH_RANDOM_NUMBER, payload: data })
	}
}
