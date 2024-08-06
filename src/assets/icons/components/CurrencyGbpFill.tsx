import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyGbpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-gbp-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 10h-5a.5.5 0 0 1 0-1 1 1 0 0 0 1-1v-1h-1a.5.5 0 0 1 0-1h1V6a2.5 2.5 0 0 1 3.75-2.165.5.5 0 0 1-.5.866A1.5 1.5 0 0 0 7.5 6v1.5h1a.5.5 0 0 1 0 1h-1v1c0 .351-.093.696-.27 1h3.27a.5.5 0 0 1 0 1" /></g><defs><clipPath id="currency-gbp-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyGbpFill);
const Memo = memo(ForwardRef);
export default Memo;