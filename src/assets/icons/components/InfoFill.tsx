import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInfoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#info-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m-.25 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.75 7a1 1 0 0 1-1-1V8a.5.5 0 0 1 0-1 1 1 0 0 1 1 1v2.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="info-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgInfoFill);
const Memo = memo(ForwardRef);
export default Memo;