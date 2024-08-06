import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCoatHangerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#coat-hanger-fill_svg__a)"><path fill="#000" d="M15.098 10.7 8.833 6 10.3 4.9a.5.5 0 0 0 .2-.4 2.5 2.5 0 0 0-5 0 .5.5 0 1 0 1 0 1.5 1.5 0 0 1 2.98-.236L.903 10.7a1 1 0 0 0 .598 1.8h13a1 1 0 0 0 .6-1.8zm-13.052.8c1.304-.838 3.547-2 5.954-2s4.65 1.162 5.954 2z" /></g><defs><clipPath id="coat-hanger-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCoatHangerFill);
const Memo = memo(ForwardRef);
export default Memo;