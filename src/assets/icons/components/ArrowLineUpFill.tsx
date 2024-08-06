import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-up-fill_svg__a)"><path fill="#000" d="M12.854 8.646a.5.5 0 0 1-.354.854h-4V14a.5.5 0 0 1-1 0V9.5h-4a.5.5 0 0 1-.354-.854l4.5-4.5a.5.5 0 0 1 .708 0zM13.5 2h-11a.5.5 0 1 0 0 1h11a.5.5 0 0 0 0-1" /></g><defs><clipPath id="arrow-line-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineUpFill);
const Memo = memo(ForwardRef);
export default Memo;