import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhonePauseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-pause-fill_svg__a)"><path fill="#000" d="M13.993 11.442A3.516 3.516 0 0 1 10.5 14.5c-4.962 0-9-4.038-9-9a3.516 3.516 0 0 1 3.058-3.493 1 1 0 0 1 1.038.595l1.32 2.947v.008a1 1 0 0 1-.115.991L5.5 8.091c.468.95 1.463 1.937 2.427 2.406l1.521-1.294.047-.035a1 1 0 0 1 .949-.087l.007.003 2.944 1.32a1 1 0 0 1 .598 1.038M12.5 7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 .5.5M10 7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="phone-pause-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhonePauseFill);
const Memo = memo(ForwardRef);
export default Memo;