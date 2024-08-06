import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSuitcaseRollingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#suitcase-rolling-fill_svg__a)"><path fill="#000" d="M12 3h-1.5V1.5A1.5 1.5 0 0 0 9 0H7a1.5 1.5 0 0 0-1.5 1.5V3H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v1a.5.5 0 0 0 1 0v-1h4v1a.5.5 0 0 0 1 0v-1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-6 9a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0zm2.5 0a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0zm1-9h-3V1.5A.5.5 0 0 1 7 1h2a.5.5 0 0 1 .5.5zm1.5 9a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="suitcase-rolling-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSuitcaseRollingFill);
const Memo = memo(ForwardRef);
export default Memo;