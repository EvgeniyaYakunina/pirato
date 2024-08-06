import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrafficSignalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#traffic-signal-fill_svg__a)"><path fill="#000" d="M13.5 9h-1V5h1a.5.5 0 0 0 0-1h-1V2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1V4h-1a.5.5 0 1 0 0 1h1v4h-1a.5.5 0 1 0 0 1h1v3.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V10h1a.5.5 0 0 0 0-1M8 7.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m0 1.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" /></g><defs><clipPath id="traffic-signal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrafficSignalFill);
const Memo = memo(ForwardRef);
export default Memo;