import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheeseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cheese-fill_svg__a)"><path fill="#000" d="M11.5 2a.5.5 0 0 0-.144.021l-10 3A.5.5 0 0 0 1 5.5v1a.5.5 0 0 0 .5.5h.466c.84 0 1.55.688 1.534 1.529A1.5 1.5 0 0 1 2 10h-.5a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5H14a1 1 0 0 0 1-1v-6A3.504 3.504 0 0 0 11.5 2M5 11.5a2 2 0 0 1 4 0zm5.5-3A2 2 0 0 1 8.563 6h3.874A2 2 0 0 1 10.5 8.5M4.907 5l6.663-2a2.504 2.504 0 0 1 2.38 2z" /></g><defs><clipPath id="cheese-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCheeseFill);
const Memo = memo(ForwardRef);
export default Memo;