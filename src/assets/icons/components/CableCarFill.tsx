import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCableCarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cable-car-fill_svg__a)"><path fill="#000" d="M15.492 1.912a.5.5 0 0 0-.58-.404l-14 2.5a.5.5 0 0 0 .177.985l6.41-1.145V6H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8.5V3.67l6.588-1.176a.5.5 0 0 0 .405-.581M6.5 10V7h3v3zM4 7h1.5v3H3V8a1 1 0 0 1 1-1m9 1v2h-2.5V7H12a1 1 0 0 1 1 1" /></g><defs><clipPath id="cable-car-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCableCarFill);
const Memo = memo(ForwardRef);
export default Memo;