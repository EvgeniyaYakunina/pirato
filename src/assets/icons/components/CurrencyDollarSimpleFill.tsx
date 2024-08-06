import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyDollarSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-dollar-simple-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m1 10h-.5v.5a.5.5 0 0 1-1 0v-.5H7a2 2 0 0 1-2-2 .5.5 0 1 1 1 0 1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H7.25a2 2 0 1 1 0-4h.25V4a.5.5 0 1 1 1 0v.5h.25a2 2 0 0 1 2 2 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-1.5a1 1 0 0 0 0 2H9a2 2 0 0 1 0 4" /></g><defs><clipPath id="currency-dollar-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyDollarSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;