import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-down-fill_svg__a)"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 6-4 4-4-4" /></g><defs><clipPath id="caret-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretDownFill);
const Memo = memo(ForwardRef);
export default Memo;