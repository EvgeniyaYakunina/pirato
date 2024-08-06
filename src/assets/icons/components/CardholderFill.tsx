import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCardholderFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cardholder-fill_svg__a)"><path fill="#000" d="M13 3H3a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 3 13h10a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13 3M9.5 7.5a1.5 1.5 0 0 1-3 0A.5.5 0 0 0 6 7H2.5V6h11v1H10a.5.5 0 0 0-.5.5M3 4h10a.5.5 0 0 1 .5.5V5h-11v-.5A.5.5 0 0 1 3 4" /></g><defs><clipPath id="cardholder-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCardholderFill);
const Memo = memo(ForwardRef);
export default Memo;