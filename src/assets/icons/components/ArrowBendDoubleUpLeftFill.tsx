import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendDoubleUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-double-up-left-fill_svg__a)"><path fill="#000" d="M5.354 9.146a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708L2.707 6.5zM8.5 6.02v-2.52a.5.5 0 0 0-.854-.353l-3 3a.5.5 0 0 0 0 .708l3 3A.5.5 0 0 0 8.5 9.5V7.023a5.507 5.507 0 0 1 5 5.477.5.5 0 0 0 1 0 6.51 6.51 0 0 0-6-6.481" /></g><defs><clipPath id="arrow-bend-double-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendDoubleUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;