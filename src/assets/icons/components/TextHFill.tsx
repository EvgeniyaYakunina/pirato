import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 9a.5.5 0 0 1-1 0V8.5h-5V11a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0v2.5h5V5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="text-h-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHFill);
const Memo = memo(ForwardRef);
export default Memo;