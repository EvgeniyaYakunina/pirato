import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPauseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pause-fill_svg__a)"><path fill="#000" d="M13.5 3v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1M6 2H3.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></g><defs><clipPath id="pause-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPauseFill);
const Memo = memo(ForwardRef);
export default Memo;