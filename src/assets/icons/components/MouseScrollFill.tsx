import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMouseScrollFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mouse-scroll-fill_svg__a)"><path fill="#000" d="M9 1H7a4.004 4.004 0 0 0-4 4v6a4.004 4.004 0 0 0 4 4h2a4.004 4.004 0 0 0 4-4V5a4.005 4.005 0 0 0-4-4m.146 9.146a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V5.207l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708L8.5 5.207v5.586z" /></g><defs><clipPath id="mouse-scroll-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMouseScrollFill);
const Memo = memo(ForwardRef);
export default Memo;