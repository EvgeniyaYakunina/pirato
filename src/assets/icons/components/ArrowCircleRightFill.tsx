import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-right-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.854 6.854-2 2a.5.5 0 0 1-.708-.708L9.293 8.5H5.5a.5.5 0 0 1 0-1h3.793L8.146 6.354a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-circle-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleRightFill);
const Memo = memo(ForwardRef);
export default Memo;