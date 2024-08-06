import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCardsThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cards-three-fill_svg__a)"><path fill="#000" d="M14 6.5v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-10.5-2h9a.5.5 0 0 0 0-1h-9a.5.5 0 1 0 0 1m1-2h7a.5.5 0 0 0 0-1h-7a.5.5 0 1 0 0 1" /></g><defs><clipPath id="cards-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCardsThreeFill);
const Memo = memo(ForwardRef);
export default Memo;