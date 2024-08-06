import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-check-fill_svg__a)"><path fill="#000" d="M13 2.5H3a1 1 0 0 0-1 1V7c0 3.295 1.595 5.292 2.933 6.387 1.441 1.179 2.875 1.579 2.938 1.595a.5.5 0 0 0 .262 0c.063-.016 1.495-.416 2.938-1.595C12.405 12.292 14 10.295 14 7V3.5a1 1 0 0 0-1-1m-2.145 4.354-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.501.501 0 0 1 .708.708z" /></g><defs><clipPath id="shield-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldCheckFill);
const Memo = memo(ForwardRef);
export default Memo;