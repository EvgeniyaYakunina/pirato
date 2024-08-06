import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCookieFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cookie-fill_svg__a)"><path fill="#000" d="M14 7.5A2.5 2.5 0 0 1 11.5 5a.5.5 0 0 0-.5-.5A2.5 2.5 0 0 1 8.5 2a.5.5 0 0 0-.5-.5A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-.5-.5M4.72 6.22a.75.75 0 1 1 1.058 1.062.75.75 0 0 1-1.059-1.063m1.562 4.562a.75.75 0 1 1-1.056-1.06.75.75 0 0 1 1.055 1.059m1.437-2.5a.75.75 0 1 1 .244.162.8.8 0 0 1-.244-.163m2.563 3a.75.75 0 1 1-1.056-1.06.75.75 0 0 1 1.055 1.059" /></g><defs><clipPath id="cookie-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCookieFill);
const Memo = memo(ForwardRef);
export default Memo;