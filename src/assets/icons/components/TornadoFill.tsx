import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTornadoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tornado-fill_svg__a)"><path fill="#000" d="M9 14.25a.75.75 0 0 1-.75.75h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 0 1 .75.75M13.75 2h-10a.75.75 0 0 0 0 1.5.75.75 0 0 1 0 1.5h-1a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 0 1.5.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5.75.75 0 1 1 0-1.5h1a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 1 0-1.5.75.75 0 1 0 0-1.5.75.75 0 0 1 0-1.5h3.5a.75.75 0 1 0 0-1.5" /></g><defs><clipPath id="tornado-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTornadoFill);
const Memo = memo(ForwardRef);
export default Memo;