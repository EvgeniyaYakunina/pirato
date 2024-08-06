import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatLinesRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-lines-right-fill_svg__a)"><path fill="#000" d="M8.309 14.462A.5.5 0 0 1 8 14v-2.5H6.5A.5.5 0 0 1 6 11V5a.5.5 0 0 1 .5-.5H8V2a.5.5 0 0 1 .854-.354l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.545.108M3 11V5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0m2 0V5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0" /></g><defs><clipPath id="arrow-fat-lines-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatLinesRightFill);
const Memo = memo(ForwardRef);
export default Memo;