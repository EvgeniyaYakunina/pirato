import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckSquareOffsetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#check-square-offset-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 12.5a.5.5 0 0 1-.354-.146l-1-1a.5.5 0 0 1 .708-.708l.646.647 2.146-2.147a.5.5 0 1 1 .708.708l-2.5 2.5A.5.5 0 0 1 5 12.5m7.5-.5a.5.5 0 0 1-.5.5H8.5a.5.5 0 0 1 0-1h3v-7h-7v4a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="check-square-offset-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCheckSquareOffsetFill);
const Memo = memo(ForwardRef);
export default Memo;