import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-vertical-fill_svg__a)"><path fill="#000" d="M10.462 12.309a.5.5 0 0 1-.108.545l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 6 12h1.5V4H6a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .708 0l2 2A.5.5 0 0 1 10 4H8.5v8H10a.5.5 0 0 1 .462.309" /></g><defs><clipPath id="arrows-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;