import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlugChargingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#plug-charging-fill_svg__a)"><path fill="#000" d="M14 3.5h-3V1a.5.5 0 0 0-1 0v2.5H6V1a.5.5 0 1 0-1 .034V3.5H2.034A.501.501 0 1 0 2 4.5h1V10a2.5 2.5 0 0 0 2.5 2.5h2V15a.5.5 0 0 0 1 0v-2.5h2A2.5 2.5 0 0 0 13 10V4.5h1a.5.5 0 0 0 0-1M9.468 8.176l-.75 2a.5.5 0 1 1-.937-.352l.5-1.324H7a.5.5 0 0 1-.468-.676l.75-2a.5.5 0 1 1 .937.352L7.72 7.5H9a.5.5 0 0 1 .468.676" /></g><defs><clipPath id="plug-charging-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlugChargingFill);
const Memo = memo(ForwardRef);
export default Memo;