import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeartHalfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#heart-half-fill_svg__a)"><path fill="#000" d="M11.125 2.5c-1.29 0-2.42.555-3.125 1.493C7.296 3.055 6.166 2.5 4.875 2.5A3.88 3.88 0 0 0 1 6.375c0 4.375 6.487 7.917 6.763 8.063a.5.5 0 0 0 .474 0C8.513 14.292 15 10.75 15 6.374A3.88 3.88 0 0 0 11.125 2.5M8 13.425V6.5a3 3 0 0 1 2.6-2.972q.263-.027.525-.028A2.88 2.88 0 0 1 14 6.375c0 3.35-4.86 6.384-6 7.05" /></g><defs><clipPath id="heart-half-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeartHalfFill);
const Memo = memo(ForwardRef);
export default Memo;