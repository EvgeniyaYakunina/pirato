import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowULeftUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-left-up-fill_svg__a)"><path fill="#000" d="M13 5v5.5a4 4 0 1 1-8 0v-5H2.5a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3A.5.5 0 0 1 8.5 5.5H6v5a3 3 0 1 0 6 0V5a.5.5 0 0 1 1 0" /></g><defs><clipPath id="arrow-u-left-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowULeftUpFill);
const Memo = memo(ForwardRef);
export default Memo;