import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDresserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dresser-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1V5a.25.25 0 0 0 .25.25h10.5A.25.25 0 0 0 13.5 5V2.5a1 1 0 0 0-1-1M8.5 4h-1a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m4.75 2.25H2.75a.25.25 0 0 0-.25.25v3a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25M8.5 8.5h-.983A.51.51 0 0 1 7 8.033a.5.5 0 0 1 .5-.533h.983A.51.51 0 0 1 9 7.967a.5.5 0 0 1-.5.533m4.75 2.25H2.75a.25.25 0 0 0-.25.25v2.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V11a.25.25 0 0 0-.25-.25M8.5 13h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1" /></g><defs><clipPath id="dresser-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDresserFill);
const Memo = memo(ForwardRef);
export default Memo;