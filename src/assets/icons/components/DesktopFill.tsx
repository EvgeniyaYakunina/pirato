import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDesktopFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#desktop-fill_svg__a)"><path fill="#000" d="M13 2.5H3A1.5 1.5 0 0 0 1.5 4v7A1.5 1.5 0 0 0 3 12.5h4.5v1H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8.5v-1H13a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5m0 9H3a.5.5 0 0 1-.5-.5v-1h11v1a.5.5 0 0 1-.5.5" /></g><defs><clipPath id="desktop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDesktopFill);
const Memo = memo(ForwardRef);
export default Memo;