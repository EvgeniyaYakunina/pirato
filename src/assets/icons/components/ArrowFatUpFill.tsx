import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-up-fill_svg__a)"><path fill="#000" d="M14.462 7.691A.5.5 0 0 1 14 8h-2.5v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8H2a.5.5 0 0 1-.354-.854l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .108.545" /></g><defs><clipPath id="arrow-fat-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatUpFill);
const Memo = memo(ForwardRef);
export default Memo;