import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodepenLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#codepen-logo-fill_svg__a)"><path fill="#000" d="m14.737 5.563-6.5-3.5a.5.5 0 0 0-.474 0l-6.5 3.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .263.438L7.131 13.6a.25.25 0 0 0 .336-.096.25.25 0 0 0 .033-.124V9.8L4.16 8 2 9.163V6.837L4.16 8l1.054-.568L2.554 6 7.5 3.337v2.864L5.214 7.432 8 8.932l2.786-1.5L11.84 8 14 6.837v2.326L11.84 8 8.5 9.8v3.581a.25.25 0 0 0 .369.22l5.868-3.162A.5.5 0 0 0 15 10V6a.5.5 0 0 0-.263-.437m-3.951 1.875L8.5 6.2V3.337L13.446 6z" /></g><defs><clipPath id="codepen-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCodepenLogoFill);
const Memo = memo(ForwardRef);
export default Memo;