import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWheelchairFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wheelchair-fill_svg__a)"><path fill="#000" d="m15.658 12.474-1.5.5a.5.5 0 0 1-.605-.25L11.69 9H6.5a.5.5 0 0 1-.5-.5V6.646A3.5 3.5 0 0 0 7 13.5c1.62 0 3.13-1.128 3.516-2.625a.5.5 0 1 1 .968.25C10.981 13.081 9.095 14.5 7 14.5a4.5 4.5 0 0 1-1-8.887V4.426a1.75 1.75 0 1 1 1 0V5.5h3.5a.5.5 0 0 1 0 1H7V8h5a.5.5 0 0 1 .447.276l1.806 3.613 1.089-.363a.5.5 0 1 1 .316.948" /></g><defs><clipPath id="wheelchair-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWheelchairFill);
const Memo = memo(ForwardRef);
export default Memo;