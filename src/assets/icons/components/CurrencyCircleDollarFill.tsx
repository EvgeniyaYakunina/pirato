import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyCircleDollarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-circle-dollar-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m.75 9.5H8.5v.5a.5.5 0 0 1-1 0V11h-1a.5.5 0 0 1 0-1h2.25a.75.75 0 1 0 0-1.5h-1.5a1.75 1.75 0 1 1 0-3.5h.25v-.5a.5.5 0 1 1 1 0V5h1a.5.5 0 0 1 0 1H7.25a.75.75 0 0 0 0 1.5h1.5a1.75 1.75 0 1 1 0 3.5" /></g><defs><clipPath id="currency-circle-dollar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyCircleDollarFill);
const Memo = memo(ForwardRef);
export default Memo;