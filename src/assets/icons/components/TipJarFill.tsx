import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTipJarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tip-jar-fill_svg__a)"><path fill="#000" d="M11.5 3.05V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v1.05a2.5 2.5 0 0 0-2 2.45v7A2.5 2.5 0 0 0 5 15h6a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2-2.45M7.5 2h1v1h-1zm-2 0h1v1h-1zm3 9.5v.5a.5.5 0 0 1-1 0v-.5H7a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 0-1h-1a1.5 1.5 0 0 1 0-3V6a.5.5 0 1 1 1 0v.5H9a.5.5 0 1 1 0 1H7.5a.5.5 0 1 0 0 1h1a1.5 1.5 0 0 1 0 3m2-8.5h-1V2h1z" /></g><defs><clipPath id="tip-jar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTipJarFill);
const Memo = memo(ForwardRef);
export default Memo;