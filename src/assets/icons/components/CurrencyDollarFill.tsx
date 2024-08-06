import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyDollarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-dollar-fill_svg__a)"><path fill="#000" d="M10 9.5a1 1 0 0 1-1 1h-.5v-2H9a1 1 0 0 1 1 1M14.5 8A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8M11 9.5a2 2 0 0 0-2-2h-.5v-2h.25a1 1 0 0 1 1 1 .5.5 0 1 0 1 0 2 2 0 0 0-2-2H8.5V4a.5.5 0 1 0-1 0v.5h-.25a2 2 0 1 0 0 4h.25v2H7a1 1 0 0 1-1-1 .5.5 0 1 0-1 0 2 2 0 0 0 2 2h.5v.5a.5.5 0 0 0 1 0v-.5H9a2 2 0 0 0 2-2m-4.75-3a1 1 0 0 0 1 1h.25v-2h-.25a1 1 0 0 0-1 1" /></g><defs><clipPath id="currency-dollar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyDollarFill);
const Memo = memo(ForwardRef);
export default Memo;