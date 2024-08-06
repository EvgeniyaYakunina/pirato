import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCopyleftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#copyleft-fill_svg__a)"><path fill="#000" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M8 11a2.98 2.98 0 0 1-2.4-1.2.5.5 0 1 1 .8-.6 2 2 0 1 0 0-2.4.5.5 0 1 1-.8-.6A3 3 0 1 1 8 11m0-9.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5" /></g><defs><clipPath id="copyleft-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCopyleftFill);
const Memo = memo(ForwardRef);
export default Memo;