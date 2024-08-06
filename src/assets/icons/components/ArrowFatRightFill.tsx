import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowFatRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-fat-right-fill_svg__a)"><path fill="#000" d="M8.309 14.462A.5.5 0 0 1 8 14v-2.5H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5V2a.5.5 0 0 1 .854-.354l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.545.108" /></g><defs><clipPath id="arrow-fat-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowFatRightFill);
const Memo = memo(ForwardRef);
export default Memo;