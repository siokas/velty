import { useRef, useEffect } from "react";

export function numberFormatter(num: number, digits: number): string {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export function percentageFormatter(num: number, digits = 2): string {
  if (!num) return "";
  return num.toLocaleString("en-US", { maximumFractionDigits: digits });
}

export function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef();

  useEffect(() => {
    // @ts-ignore: Type 'Function' is not assignable to type 'undefined'
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      // @ts-ignore: Cannot invoke an object which is possibly 'undefined'
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
