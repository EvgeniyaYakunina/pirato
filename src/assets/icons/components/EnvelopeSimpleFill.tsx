import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEnvelopeSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#envelope-simple-fill_svg__a)"><path fill="#000" d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3m-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637z" /></g><defs><clipPath id="envelope-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEnvelopeSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;