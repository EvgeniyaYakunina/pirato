import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendRightUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-right-up-fill_svg__a)"><path fill="#000" d="M12.962 5.191a.5.5 0 0 1-.462.309H10V8a6.507 6.507 0 0 1-6.5 6.5.5.5 0 0 1 0-1A5.506 5.506 0 0 0 9 8V5.5H6.5a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 .108.545" /></g><defs><clipPath id="arrow-bend-right-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendRightUpFill);
const Memo = memo(ForwardRef);
export default Memo;