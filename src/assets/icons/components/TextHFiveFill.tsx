import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHFiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-five-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 8a.5.5 0 0 1-1 0V8H4.5v2a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0v2H7V5a.5.5 0 1 1 1 0zm2.5-2.5a2 2 0 1 1-1.334 3.49.5.5 0 0 1 .667-.744 1 1 0 1 0 0-1.5.5.5 0 0 1-.823-.476l.5-2.375A.5.5 0 0 1 10 5.5h2a.5.5 0 0 1 0 1h-1.594l-.219 1.023A2 2 0 0 1 10.5 7.5" /></g><defs><clipPath id="text-h-five-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHFiveFill);
const Memo = memo(ForwardRef);
export default Memo;