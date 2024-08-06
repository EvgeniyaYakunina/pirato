import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRulerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ruler-fill_svg__a)"><path fill="#000" d="M14.708 6 6 14.707a1 1 0 0 1-1.414 0l-3.294-3.293a1 1 0 0 1 0-1.414l1.824-1.823a.25.25 0 0 1 .353 0l2.177 2.177a.5.5 0 0 0 .732-.027.51.51 0 0 0-.037-.693L4.176 7.469a.25.25 0 0 1 0-.353l.938-.937a.25.25 0 0 1 .353 0l2.177 2.176a.5.5 0 0 0 .732-.026.51.51 0 0 0-.037-.694L6.177 5.47a.25.25 0 0 1 0-.353l.937-.937a.25.25 0 0 1 .353 0l2.177 2.176a.5.5 0 0 0 .733-.026.51.51 0 0 0-.038-.694L8.177 3.47a.25.25 0 0 1 0-.353L10 1.293a1 1 0 0 1 1.414 0l3.294 3.292a1 1 0 0 1 0 1.415" /></g><defs><clipPath id="ruler-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRulerFill);
const Memo = memo(ForwardRef);
export default Memo;