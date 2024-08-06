import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowsOutLineVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrows-out-line-vertical-fill_svg__a)"><path fill="#000" d="M14 8a.5.5 0 0 1-.5.5h-11a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5M6 3.5h1.5V6a.5.5 0 0 0 1 0V3.5H10a.5.5 0 0 0 .354-.854l-2-2a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 6 3.5m4 9H8.5V10a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0-.354.854l2 2a.5.5 0 0 0 .708 0l2-2A.501.501 0 0 0 10 12.5" /></g><defs><clipPath id="arrows-out-line-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowsOutLineVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;