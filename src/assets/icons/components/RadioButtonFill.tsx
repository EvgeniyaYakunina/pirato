import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRadioButtonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#radio-button-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5M11.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" /></g><defs><clipPath id="radio-button-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRadioButtonFill);
const Memo = memo(ForwardRef);
export default Memo;