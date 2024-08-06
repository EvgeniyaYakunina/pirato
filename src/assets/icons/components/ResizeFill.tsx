import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgResizeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#resize-fill_svg__a)"><path fill="#000" d="M9 7.5V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7.5A.5.5 0 0 1 3 7h5.5a.5.5 0 0 1 .5.5m4 3.5a.5.5 0 0 0-.5.5v1H11a.5.5 0 0 0 0 1h1.5a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5m0-4.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5m-.5-4h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1a1 1 0 0 0-1-1M9 2.5H7a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1m-6 3a.5.5 0 0 0 .5-.5V3.5h1a.5.5 0 1 0 0-1h-1a1 1 0 0 0-1 1V5a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="resize-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgResizeFill);
const Memo = memo(ForwardRef);
export default Memo;