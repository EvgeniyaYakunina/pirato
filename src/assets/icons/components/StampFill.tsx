import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStampFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stamp-fill_svg__a)"><path fill="#000" d="M14 14a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5m-1-6H9.473l.982-4.58A2 2 0 0 0 8.5 1h-1a2 2 0 0 0-1.955 2.42L6.527 8H3a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" /></g><defs><clipPath id="stamp-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStampFill);
const Memo = memo(ForwardRef);
export default Memo;