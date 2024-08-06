import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMopedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#moped-fill_svg__a)"><path fill="#000" d="M13.5 8q-.197 0-.392.031l-2.14-5.707A.5.5 0 0 0 10.5 2h-2a.5.5 0 1 0 0 1h1.654l2.018 5.383A2.5 2.5 0 0 0 11.048 10H8.535L6.97 5.824A.5.5 0 0 0 6.5 5.5h-5a.5.5 0 1 0 0 1H2v.837A3.51 3.51 0 0 0 0 10.5a.5.5 0 0 0 .5.5h.55a2.5 2.5 0 0 0 4.9 0h5.1a2.5 2.5 0 1 0 2.45-3m-10 4a1.5 1.5 0 0 1-1.414-1h2.828A1.5 1.5 0 0 1 3.5 12m10 0a1.5 1.5 0 0 1-.964-2.648l.496 1.324a.5.5 0 0 0 .644.293.503.503 0 0 0 .293-.645L13.472 9h.028a1.5 1.5 0 0 1 0 3" /></g><defs><clipPath id="moped-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMopedFill);
const Memo = memo(ForwardRef);
export default Memo;