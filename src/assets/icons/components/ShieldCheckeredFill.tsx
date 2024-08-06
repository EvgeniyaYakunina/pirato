import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldCheckeredFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-checkered-fill_svg__a)"><path fill="#000" d="M14 3.5V7c0 3.295-1.595 5.292-2.933 6.387-1.441 1.179-2.875 1.58-2.938 1.595a.5.5 0 0 1-.262 0c-.063-.016-1.495-.416-2.938-1.595C3.595 12.292 2 10.295 2 7V3.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1" /></g><defs><clipPath id="shield-checkered-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldCheckeredFill);
const Memo = memo(ForwardRef);
export default Memo;