import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyBtcFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-btc-fill_svg__a)"><path fill="#000" d="M11 9.5a1 1 0 0 1-1 1H7v-2h3a1 1 0 0 1 1 1M15 8a6.5 6.5 0 1 1-6.5-6.5A6.507 6.507 0 0 1 15 8m-3 1.5a2 2 0 0 0-.97-1.714A2 2 0 0 0 10 4.563V4a.5.5 0 1 0-1 0v.5H8V4a.5.5 0 1 0-1 0v.5H6a.5.5 0 0 0 0 1v5a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-.5h1v.5a.5.5 0 0 0 1 0v-.5a2 2 0 0 0 2-2m-1.5-3a1 1 0 0 0-1-1H7v2h2.5a1 1 0 0 0 1-1" /></g><defs><clipPath id="currency-btc-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyBtcFill);
const Memo = memo(ForwardRef);
export default Memo;