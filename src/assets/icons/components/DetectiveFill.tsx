import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDetectiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#detective-fill_svg__a)"><path fill="#000" d="M16 7.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h1.745l2.969-4.088a1 1 0 0 1 1.582-.045l.803.931.012.014a.497.497 0 0 0 .778 0l.012-.014.803-.931a1 1 0 0 1 1.582.045L13.755 7H15.5a.5.5 0 0 1 .5.5M11.25 9a2.25 2.25 0 0 0-2.236 2H6.986a2.25 2.25 0 1 0-.115 1H9.13a2.25 2.25 0 1 0 2.121-3" /></g><defs><clipPath id="detective-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDetectiveFill);
const Memo = memo(ForwardRef);
export default Memo;