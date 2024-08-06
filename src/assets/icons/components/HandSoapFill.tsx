import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandSoapFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-soap-fill_svg__a)"><path fill="#000" d="M11.5 6.05V5.5a2 2 0 0 0-2-2h-1V2h2a.5.5 0 0 1 .5.5.5.5 0 0 0 1 0A1.5 1.5 0 0 0 10.5 1h-4a.5.5 0 1 0 0 1h1v1.5h-1a2 2 0 0 0-2 2v.55a2.504 2.504 0 0 0-2 2.45v5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-5a2.504 2.504 0 0 0-2-2.45m-5-1.55h3a1 1 0 0 1 1 1V6h-5v-.5a1 1 0 0 1 1-1" /></g><defs><clipPath id="hand-soap-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandSoapFill);
const Memo = memo(ForwardRef);
export default Memo;