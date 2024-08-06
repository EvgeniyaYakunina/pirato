import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSlidersFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sliders-fill_svg__a)"><path fill="#000" d="M5.25 8.5A1.75 1.75 0 0 1 4 10.177V13.5a.5.5 0 0 1-1 0v-3.323a1.75 1.75 0 0 1 0-3.354V2.5a.5.5 0 1 1 1 0v4.323A1.75 1.75 0 0 1 5.25 8.5M8.5 3.823V2.5a.5.5 0 1 0-1 0v1.323a1.75 1.75 0 0 0 0 3.354V13.5a.5.5 0 0 0 1 0V7.177a1.75 1.75 0 0 0 0-3.354m4.5 5V2.5a.5.5 0 0 0-1 0v6.323a1.75 1.75 0 0 0 0 3.354V13.5a.5.5 0 0 0 1 0v-1.323a1.75 1.75 0 0 0 0-3.354" /></g><defs><clipPath id="sliders-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSlidersFill);
const Memo = memo(ForwardRef);
export default Memo;