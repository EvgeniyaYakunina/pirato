import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGasPumpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gas-pump-fill_svg__a)"><path fill="#000" d="m15.063 4.354-1.21-1.208a.5.5 0 0 0-.707.708l1.208 1.209a.5.5 0 0 1 .146.351V10.5a.5.5 0 0 1-1 0V8A1.5 1.5 0 0 0 12 6.5h-1v-3A1.5 1.5 0 0 0 9.5 2h-5A1.5 1.5 0 0 0 3 3.5V13H2a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-1V7.5h1a.5.5 0 0 1 .5.5v2.5a1.5 1.5 0 1 0 3 0V5.414a1.5 1.5 0 0 0-.437-1.06M9 7.5H5a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1" /></g><defs><clipPath id="gas-pump-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGasPumpFill);
const Memo = memo(ForwardRef);
export default Memo;