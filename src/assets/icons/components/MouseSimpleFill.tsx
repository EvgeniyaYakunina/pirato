import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMouseSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mouse-simple-fill_svg__a)"><path fill="#000" d="M9 1H7a4.004 4.004 0 0 0-4 4v6a4.004 4.004 0 0 0 4 4h2a4.004 4.004 0 0 0 4-4V5a4.005 4.005 0 0 0-4-4m-.5 6a.5.5 0 1 1-1 0V4a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="mouse-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMouseSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;