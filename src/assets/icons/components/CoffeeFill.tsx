import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoffeeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#coffee-fill_svg__a)"><path fill="#000" d="M13 5H2a.5.5 0 0 0-.5.5v3A6.02 6.02 0 0 0 3.534 13H2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-1.534a6.04 6.04 0 0 0 1.688-2.506A2.5 2.5 0 0 0 15.5 8v-.5A2.5 2.5 0 0 0 13 5m1.5 3a1.5 1.5 0 0 1-1.075 1.438q.075-.466.075-.938V6.086a1.5 1.5 0 0 1 1 1.414zM7 3.5v-2a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0m2 0v-2a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0m-4 0v-2a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0" /></g><defs><clipPath id="coffee-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCoffeeFill);
const Memo = memo(ForwardRef);
export default Memo;