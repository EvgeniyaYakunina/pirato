import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-down-fill_svg__a)"><path fill="#000" d="m12.854 9.354-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5A.5.5 0 0 1 3.5 8.5h4v-6a.5.5 0 1 1 1 0v6h4a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrow-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowDownFill);
const Memo = memo(ForwardRef);
export default Memo;