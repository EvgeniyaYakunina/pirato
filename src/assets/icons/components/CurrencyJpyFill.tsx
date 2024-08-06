import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyJpyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-jpy-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.4 3.3L9 8h1a.5.5 0 0 1 0 1H8.5v1H10a.5.5 0 0 1 0 1H8.5v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1 0-1h1.5V9H6a.5.5 0 0 1 0-1h1L4.6 4.8a.5.5 0 0 1 .8-.6L8 7.667 10.6 4.2a.5.5 0 0 1 .8.6" /></g><defs><clipPath id="currency-jpy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyJpyFill);
const Memo = memo(ForwardRef);
export default Memo;