import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVectorTwoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#vector-two-fill_svg__a)"><path fill="#000" d="m14.354 12.354-2 2A.501.501 0 0 1 11.5 14v-1.5H5a.5.5 0 0 1-.5-.5V5H3a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .708 0l2 2A.5.5 0 0 1 7 5H5.5v6.5h6V10a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="vector-two-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVectorTwoFill);
const Memo = memo(ForwardRef);
export default Memo;