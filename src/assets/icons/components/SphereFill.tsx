import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSphereFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sphere-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 1c.51 0 1.5 1.941 1.5 5.5q-.001.772-.058 1.442-.67.057-1.442.058c-3.559 0-5.5-.99-5.5-1.5A5.506 5.506 0 0 1 8 2.5M2.713 9.516c1.242.65 3.272.984 5.287.984.443 0 .887-.016 1.323-.048C9.014 12.438 8.375 13.5 8 13.5a5.51 5.51 0 0 1-5.287-3.984" /></g><defs><clipPath id="sphere-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSphereFill);
const Memo = memo(ForwardRef);
export default Memo;