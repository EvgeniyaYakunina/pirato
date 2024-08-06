import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInvoiceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#invoice-fill_svg__a)"><path fill="#000" d="M1.75 8a.5.5 0 1 1 0-1H3.5a.5.5 0 1 0 0-1h-1a1.5 1.5 0 0 1 0-3 .5.5 0 1 1 1 0H4a.5.5 0 1 1 0 1H2.5a.5.5 0 1 0 0 1h1a1.5 1.5 0 0 1 0 3 .5.5 0 1 1-1 0zM14 3H6a.5.5 0 1 0 0 1h7.5v2h-7a.5.5 0 1 0 0 1H10v2H5a.5.5 0 1 0 0 1h5v2H2.5V9.5a.5.5 0 1 0-1 0V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3" /></g><defs><clipPath id="invoice-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgInvoiceFill);
const Memo = memo(ForwardRef);
export default Memo;