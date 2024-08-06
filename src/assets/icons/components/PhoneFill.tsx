import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-fill_svg__a)"><path fill="#000" d="M14.493 10.942A3.516 3.516 0 0 1 11 14c-4.962 0-9-4.038-9-9a3.516 3.516 0 0 1 3.058-3.493 1 1 0 0 1 1.038.595l1.32 2.947v.008a1 1 0 0 1-.115.991L6 7.59c.468.952 1.463 1.938 2.427 2.407l1.521-1.294.047-.035a1 1 0 0 1 .948-.087l.008.003 2.945 1.32a1 1 0 0 1 .596 1.038" /></g><defs><clipPath id="phone-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneFill);
const Memo = memo(ForwardRef);
export default Memo;