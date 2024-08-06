import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListMagnifyingGlassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-magnifying-glass-fill_svg__a)"><path fill="#000" d="M2 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 4m.5 4.5H7a.5.5 0 1 0 0-1H2.5a.5.5 0 1 0 0 1m5.5 3H2.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1m6.854.146-1.269-1.271a2.5 2.5 0 1 0-.71.71l1.269 1.269a.5.5 0 1 0 .707-.708z" /></g><defs><clipPath id="list-magnifying-glass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListMagnifyingGlassFill);
const Memo = memo(ForwardRef);
export default Memo;