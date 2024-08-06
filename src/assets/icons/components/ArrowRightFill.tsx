import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-right-fill_svg__a)"><path fill="#000" d="m13.854 8.354-4.5 4.5A.5.5 0 0 1 8.5 12.5v-4h-6a.5.5 0 1 1 0-1h6v-4a.5.5 0 0 1 .854-.354l4.5 4.5a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowRightFill);
const Memo = memo(ForwardRef);
export default Memo;