import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "@/redux/currencySlice";

function useCurrencyinr(item) {
  const currencyrate = useSelector((state) => state.currency.rates);
  const currencyStatus = useSelector((state) => state.currency.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencyStatus === "idle") dispatch(fetchCurrencies());
  }, [currencyStatus, dispatch]);

  const price = item?.price || 1;
  const discount = item?.discountPercentage || 0;
  const exchangeRate = currencyrate?.inr || 1;

  const rawConvertedPrice = price * exchangeRate;
  const rawDiscountedPrice = rawConvertedPrice * (1 - discount / 100);

  const convertedPrice = rawConvertedPrice.toFixed(2);
  const discountedPrice = rawDiscountedPrice.toFixed(2);

  return { convertedPrice, discountedPrice, currencyStatus };
}

export default useCurrencyinr;
