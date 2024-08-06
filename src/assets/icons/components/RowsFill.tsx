import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRowsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rows-fill_svg__a)"><path fill="#000" d="M14 9.5V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M13 3H3a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" /></g><defs><clipPath id="rows-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRowsFill);
const Memo = memo(ForwardRef);
export default Memo;