import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPopsicleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#popsicle-fill_svg__a)"><path fill="#000" d="M8 .5A4.505 4.505 0 0 0 3.5 5v6a1 1 0 0 0 1 1h2v2.5a1.5 1.5 0 0 0 3 0V12h2a1 1 0 0 0 1-1V5A4.505 4.505 0 0 0 8 .5m-1 9a.5.5 0 1 1-1 0v-5a.5.5 0 1 1 1 0zm1.5 5a.5.5 0 0 1-1 0V12h1zm1.5-5a.5.5 0 1 1-1 0v-5a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="popsicle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPopsicleFill);
const Memo = memo(ForwardRef);
export default Memo;