import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLineSegmentsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#line-segments-fill_svg__a)"><path fill="#000" d="M14.738 4.737a1.75 1.75 0 0 1-1.592.477l-1.91 3.548a1.75 1.75 0 1 1-2.778.406L6.83 7.538a1.75 1.75 0 0 1-1.183.176l-1.91 3.547a1.75 1.75 0 1 1-.884-.475l1.91-3.548a1.753 1.753 0 0 1 1.112-2.984 1.75 1.75 0 0 1 1.665 2.578l1.63 1.629a1.76 1.76 0 0 1 1.187-.173l1.91-3.548a1.751 1.751 0 1 1 2.475 0z" /></g><defs><clipPath id="line-segments-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLineSegmentsFill);
const Memo = memo(ForwardRef);
export default Memo;