import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-plus-fill_svg__a)"><path fill="#000" d="M13 2.5H3a1 1 0 0 0-1 1V7c0 3.295 1.595 5.292 2.933 6.387 1.441 1.179 2.875 1.58 2.938 1.595a.5.5 0 0 0 .262 0c.063-.016 1.495-.416 2.938-1.595C12.405 12.292 14 10.295 14 7V3.5a1 1 0 0 0-1-1m-3 6H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 1 1 0-1h1.5V6a.5.5 0 1 1 1 0v1.5H10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="shield-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldPlusFill);
const Memo = memo(ForwardRef);
export default Memo;