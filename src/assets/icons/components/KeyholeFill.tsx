import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyholeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#keyhole-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m1.845 9.15a.25.25 0 0 1-.229.35H6.384a.25.25 0 0 1-.229-.35L7 8.731a2 2 0 1 1 2 0z" /></g><defs><clipPath id="keyhole-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKeyholeFill);
const Memo = memo(ForwardRef);
export default Memo;