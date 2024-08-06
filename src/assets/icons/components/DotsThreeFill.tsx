import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotsThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dots-three-fill_svg__a)"><path fill="#000" d="M14 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M3.75 8.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m4.25 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m4.25 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dots-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotsThreeFill);
const Memo = memo(ForwardRef);
export default Memo;