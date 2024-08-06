import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-up-right-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M10.5 9a.5.5 0 0 1-1 0V7.207l-3.146 3.147a.5.5 0 0 1-.708-.708L8.793 6.5H7a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="arrow-circle-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;