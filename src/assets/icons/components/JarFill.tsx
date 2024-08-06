import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgJarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#jar-fill_svg__a)"><path fill="#000" d="M11.5 3.05V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v1.05a2.5 2.5 0 0 0-2 2.45v7A2.5 2.5 0 0 0 5 15h6a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2-2.45M7.5 3V2h1v1zm3 0h-1V2h1zm-4-1v1h-1V2z" /></g><defs><clipPath id="jar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgJarFill);
const Memo = memo(ForwardRef);
export default Memo;