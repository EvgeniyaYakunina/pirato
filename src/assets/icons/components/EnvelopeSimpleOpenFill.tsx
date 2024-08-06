import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEnvelopeSimpleOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#envelope-simple-open-fill_svg__a)"><path fill="#000" d="m14.278 5.584-6-4a.5.5 0 0 0-.556 0l-6 4A.5.5 0 0 0 1.5 6v6.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a.5.5 0 0 0-.223-.416M2.5 12.5V6.97l4.119 2.938a.5.5 0 0 0 .29.093h2.182a.5.5 0 0 0 .29-.093L13.5 6.97v5.53z" /></g><defs><clipPath id="envelope-simple-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEnvelopeSimpleOpenFill);
const Memo = memo(ForwardRef);
export default Memo;