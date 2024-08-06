import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotsThreeVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dots-three-vertical-fill_svg__a)"><path fill="#000" d="M10 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M8 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 4.5A.75.75 0 1 1 8 3a.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dots-three-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotsThreeVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;