import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMopedFrontFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#moped-front-fill_svg__a)"><path fill="#000" d="M13 2.5h-2.55a2.5 2.5 0 0 0-4.9 0H3a.5.5 0 1 0 0 1h2.55a2.5 2.5 0 0 0 .786 1.364A4 4 0 0 0 4 8.5v4a1 1 0 0 0 1 1h1a2 2 0 0 0 4 0h1a1 1 0 0 0 1-1v-4a4 4 0 0 0-2.336-3.636A2.5 2.5 0 0 0 10.45 3.5H13a.5.5 0 0 0 0-1m-4 11a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0zm-1-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" /></g><defs><clipPath id="moped-front-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMopedFrontFill);
const Memo = memo(ForwardRef);
export default Memo;