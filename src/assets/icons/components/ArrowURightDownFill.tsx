import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowURightDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-right-down-fill_svg__a)"><path fill="#000" d="m13.854 11.354-3 3a.503.503 0 0 1-.708 0l-3-3A.5.5 0 0 1 7.5 10.5H10v-5a3 3 0 1 0-6 0V11a.5.5 0 0 1-1 0V5.5a4 4 0 0 1 8 0v5h2.5a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrow-u-right-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowURightDownFill);
const Memo = memo(ForwardRef);
export default Memo;