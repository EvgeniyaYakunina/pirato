import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-down-right-fill_svg__a)"><path fill="#000" d="M12.5 5.5V12a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.354-.854L8.043 8.75 3.646 4.354a.5.5 0 0 1 .708-.708L8.75 8.043l2.896-2.897a.5.5 0 0 1 .854.354" /></g><defs><clipPath id="arrow-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;