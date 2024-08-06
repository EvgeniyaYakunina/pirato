import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-fill_svg__a)"><path fill="#000" fillRule="evenodd" d="M14 7V3.5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1V7c0 3.295 1.595 5.292 2.93 6.387 1.443 1.179 2.874 1.58 2.937 1.595a.5.5 0 0 0 .262 0c.063-.016 1.497-.416 2.938-1.595C12.405 12.292 14 10.295 14 7M9.92 8.598l1.41-1.216h-.002a.516.516 0 0 0-.293-.904l-1.849-.15-.713-1.725a.513.513 0 0 0-.948 0L6.812 6.33l-1.848.149a.516.516 0 0 0-.292.904l1.41 1.216-.431 1.82a.514.514 0 0 0 .766.558L8 10.002l1.582.974a.513.513 0 0 0 .768-.559z" clipRule="evenodd" /></g><defs><clipPath id="shield-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldFill);
const Memo = memo(ForwardRef);
export default Memo;