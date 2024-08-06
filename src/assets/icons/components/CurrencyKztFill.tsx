import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyKztFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-kzt-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3 6H8.5V12a.5.5 0 0 1-1 0V7.5H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m0-2H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="currency-kzt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyKztFill);
const Memo = memo(ForwardRef);
export default Memo;