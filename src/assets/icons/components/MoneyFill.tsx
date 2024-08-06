import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoneyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#money-fill_svg__a)"><path fill="#000" d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5-4v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5m-1 2.897A3.55 3.55 0 0 1 12.103 4.5H3.897A3.55 3.55 0 0 1 1.5 6.897v2.206A3.55 3.55 0 0 1 3.897 11.5h8.206A3.55 3.55 0 0 1 14.5 9.103z" /></g><defs><clipPath id="money-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoneyFill);
const Memo = memo(ForwardRef);
export default Memo;