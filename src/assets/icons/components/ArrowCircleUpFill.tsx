import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-up-fill_svg__a)"><path fill="#000" d="M14.5 8A6.5 6.5 0 1 0 8 14.5 6.507 6.507 0 0 0 14.5 8m-4.146-.146a.5.5 0 0 1-.708 0L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-circle-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleUpFill);
const Memo = memo(ForwardRef);
export default Memo;