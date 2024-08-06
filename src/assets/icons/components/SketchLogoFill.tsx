import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSketchLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sketch-logo-fill_svg__a)"><path fill="#000" d="m15.375 6.17-3.5-4A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.375.17l-3.5 4a.5.5 0 0 0 .01.671l7 7.5a.5.5 0 0 0 .732 0l7-7.5a.5.5 0 0 0 .008-.67M13.898 6H11.25L9 3h2.273zM4.661 7l1.883 4.708L2.15 7zm6.678 0h2.51l-4.394 4.708zM4.727 3H7L4.75 6H2.102z" /></g><defs><clipPath id="sketch-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSketchLogoFill);
const Memo = memo(ForwardRef);
export default Memo;