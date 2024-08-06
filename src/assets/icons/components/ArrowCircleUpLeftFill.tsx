import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-up-left-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.354 8.854a.503.503 0 0 1-.708 0L6.5 7.207V9a.5.5 0 1 1-1 0V6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H7.207l3.147 3.146a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-circle-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;