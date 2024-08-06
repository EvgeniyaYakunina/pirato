import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M6.5 12.5h-2a1 1 0 0 1-1-1v-2a.5.5 0 1 1 1 0v2h2a.5.5 0 0 1 0 1m0-8h-2v2a.5.5 0 1 1-1 0v-2a1 1 0 0 1 1-1h2a.5.5 0 1 1 0 1m6 7a1 1 0 0 1-1 1h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0zm0-5a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1h2a1 1 0 0 1 1 1z" /></g><defs><clipPath id="selection-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionFill);
const Memo = memo(ForwardRef);
export default Memo;