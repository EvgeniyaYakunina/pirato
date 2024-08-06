import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShapesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shapes-fill_svg__a)"><path fill="#000" d="M6.974 11.342A.5.5 0 0 1 6.5 12h-5a.5.5 0 0 1-.474-.658l2.5-7.5a.5.5 0 0 1 .948 0zM13 4.75a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0M14 9H8.5a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5V9.5A.5.5 0 0 0 14 9" /></g><defs><clipPath id="shapes-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShapesFill);
const Memo = memo(ForwardRef);
export default Memo;