import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyEurFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-eur-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 5a.5.5 0 0 1 0 1H5.5v1H7a.5.5 0 0 1 0 1H5.55a2.5 2.5 0 0 0 4.117 1.364.499.499 0 0 1 .844.397.5.5 0 0 1-.178.348A3.5 3.5 0 0 1 4.536 9.5H4a.5.5 0 0 1 0-1h.5v-1H4a.5.5 0 0 1 0-1h.536a3.5 3.5 0 0 1 5.797-2.109.5.5 0 1 1-.666.745A2.5 2.5 0 0 0 5.55 6.5z" /></g><defs><clipPath id="currency-eur-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyEurFill);
const Memo = memo(ForwardRef);
export default Memo;