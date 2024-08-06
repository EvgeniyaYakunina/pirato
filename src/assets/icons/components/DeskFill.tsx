import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeskFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#desk-fill_svg__a)"><path fill="#000" d="M15.5 4H.5a.5.5 0 0 0 0 1H1v7a.5.5 0 0 0 1 0V9h12v3a.5.5 0 0 0 1 0V5h.5a.5.5 0 0 0 0-1M5 7H3.5a.5.5 0 1 1 0-1H5a.5.5 0 1 1 0 1m3.5.5a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0zm4-.5H11a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="desk-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeskFill);
const Memo = memo(ForwardRef);
export default Memo;