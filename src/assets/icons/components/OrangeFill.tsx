import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOrangeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#orange-fill_svg__a)"><path fill="#000" d="M10.367 4.536A4 4 0 0 0 12.5 1a.5.5 0 0 0-.5-.5h-.5A4 4 0 0 0 8 2.566 4 4 0 0 0 4.5.5H4a.5.5 0 1 0 0 1h.5a3.005 3.005 0 0 1 2.963 2.526 5.5 5.5 0 1 0 2.904.51M11.458 1.5A3.005 3.005 0 0 1 8.542 4a3.006 3.006 0 0 1 2.916-2.5m.035 8.583a3.59 3.59 0 0 1-2.91 2.91.5.5 0 0 1-.164-.986 2.58 2.58 0 0 0 2.089-2.09.5.5 0 0 1 .986.165" /></g><defs><clipPath id="orange-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOrangeFill);
const Memo = memo(ForwardRef);
export default Memo;