import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCompassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#compass-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.224 3.612-2 4a.26.26 0 0 1-.112.112l-4 2a.25.25 0 0 1-.36-.184.25.25 0 0 1 .024-.152l2-4a.26.26 0 0 1 .112-.112l4-2a.25.25 0 0 1 .336.336" /></g><defs><clipPath id="compass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCompassFill);
const Memo = memo(ForwardRef);
export default Memo;