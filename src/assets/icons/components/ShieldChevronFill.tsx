import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldChevronFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-chevron-fill_svg__a)"><path fill="#000" fillRule="evenodd" d="M3 2.5h10a1 1 0 0 1 1 1V7c0 3.295-1.595 5.292-2.93 6.387-1.443 1.179-2.874 1.58-2.937 1.595a.5.5 0 0 1-.262 0c-.063-.016-1.497-.416-2.938-1.595C3.595 12.292 2 10.295 2 7V3.5a1 1 0 0 1 1-1m2.568 10.113A8 8 0 0 0 8 13.976c3.164-1.363 4.552-3.319 4.944-5.976A9 9 0 0 0 13 7V3.5H3L3.056 8c.217 1.875 1.058 3.424 2.512 4.613" clipRule="evenodd" /></g><defs><clipPath id="shield-chevron-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldChevronFill);
const Memo = memo(ForwardRef);
export default Memo;