import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-plus-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M3.5 4.5a1 1 0 0 1 1-1H6a.5.5 0 1 1 0 1H4.5V6a.5.5 0 1 1-1 0zm3.5 7H4.5a1 1 0 0 1-1-1v-2a.5.5 0 1 1 1 0v2H7a.5.5 0 0 1 0 1M8 4a.5.5 0 0 1 .5-.5h2a1 1 0 0 1 1 1V7a.5.5 0 0 1-1 0V4.5h-2A.5.5 0 0 1 8 4m4.5 7.5h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1" /></g><defs><clipPath id="selection-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionPlusFill);
const Memo = memo(ForwardRef);
export default Memo;