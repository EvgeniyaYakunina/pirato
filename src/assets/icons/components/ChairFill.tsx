import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChairFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chair-fill_svg__a)"><path fill="#000" d="M13 8.5h-2v-2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.5V14a.5.5 0 0 0 1 0v-2.5h7V14a.5.5 0 0 0 1 0v-2.5h.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-3 0H6v-2h4z" /></g><defs><clipPath id="chair-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChairFill);
const Memo = memo(ForwardRef);
export default Memo;