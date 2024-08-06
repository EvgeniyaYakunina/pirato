import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMartiniFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#martini-fill_svg__a)"><path fill="#000" d="M14.854 2.854A.5.5 0 0 0 14.5 2h-13a.5.5 0 0 0-.354.854L7.5 9.207V13h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2V9.207zM13.29 3l-1 1H3.707l-1-1z" /></g><defs><clipPath id="martini-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMartiniFill);
const Memo = memo(ForwardRef);
export default Memo;