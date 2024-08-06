import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRowsPlusBottomFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rows-plus-bottom-fill_svg__a)"><path fill="#000" d="M14 8v1.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-1-5.5H3a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1M9.5 13h-1v-1a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1" /></g><defs><clipPath id="rows-plus-bottom-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRowsPlusBottomFill);
const Memo = memo(ForwardRef);
export default Memo;