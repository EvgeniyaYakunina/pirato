import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotsThreeCircleVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dots-three-circle-vertical-fill_svg__a)"><path fill="#000" d="M14.5 8A6.5 6.5 0 1 0 8 14.5 6.51 6.51 0 0 0 14.5 8M7.25 5.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" /></g><defs><clipPath id="dots-three-circle-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotsThreeCircleVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;