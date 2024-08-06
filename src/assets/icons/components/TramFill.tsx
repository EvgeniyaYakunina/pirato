import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTramFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tram-fill_svg__a)"><path fill="#000" d="M11.5 3h-3V1.5h2a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h2V3h-3a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2H5l-.9 1.2a.5.5 0 1 0 .8.6l1.35-1.8h3.5l1.35 1.8a.5.5 0 0 0 .8-.6l-.9-1.2h.5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 9.5h-7a1 1 0 0 1-1-1V8h9v3.5a1 1 0 0 1-1 1M6 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m5.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" /></g><defs><clipPath id="tram-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTramFill);
const Memo = memo(ForwardRef);
export default Memo;