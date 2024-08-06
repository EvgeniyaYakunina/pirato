import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPrinterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#printer-fill_svg__a)"><path fill="#000" d="M15 6v5a.5.5 0 0 1-.5.5h-2v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2h-2A.5.5 0 0 1 1 11V6c0-.827.71-1.5 1.583-1.5H3.5v-2A.5.5 0 0 1 4 2h8a.5.5 0 0 1 .5.5v2h.917C14.29 4.5 15 5.173 15 6M4.5 4.5h7V3h-7zm7 5.5h-7v3h7zm1-2.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="printer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPrinterFill);
const Memo = memo(ForwardRef);
export default Memo;