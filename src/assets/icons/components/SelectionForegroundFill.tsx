import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionForegroundFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-foreground-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5.5 12.5h-1a1 1 0 0 1-1-1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1m0-5.5h-1v1a.5.5 0 1 1-1 0V7a1 1 0 0 1 1-1h1a.5.5 0 1 1 0 1m4.5 4.5a1 1 0 0 1-1 1H8a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0zM10 8a.5.5 0 1 1-1 0V7H8a.5.5 0 1 1 0-1h1a1 1 0 0 1 1 1zm2.5 1a1 1 0 0 1-1 1 .5.5 0 0 1 0-1V4.5H7a.5.5 0 1 1-1 0 1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1z" /></g><defs><clipPath id="selection-foreground-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionForegroundFill);
const Memo = memo(ForwardRef);
export default Memo;