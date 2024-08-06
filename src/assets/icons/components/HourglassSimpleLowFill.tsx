import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHourglassSimpleLowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hourglass-simple-low-fill_svg__a)"><path fill="#000" d="M13.199 12.285 8.723 8 13.2 3.715l.008-.008A1 1 0 0 0 12.5 2h-9a1 1 0 0 0-.699 1.715L7.277 8 2.8 12.285l-.008.008A1 1 0 0 0 3.5 14h9a1 1 0 0 0 .699-1.715M9.889 10.5H6.111L8 8.693zM12.5 3 8 7.308 3.5 3z" /></g><defs><clipPath id="hourglass-simple-low-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHourglassSimpleLowFill);
const Memo = memo(ForwardRef);
export default Memo;