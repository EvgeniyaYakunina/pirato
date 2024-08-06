import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkipBackFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#skip-back-fill_svg__a)"><path fill="#000" d="M13 2.993v10.015a1 1 0 0 1-1.527.839L4 9.173V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 1 1 1 0v4.327l7.473-4.674a.997.997 0 0 1 1.527.84" /></g><defs><clipPath id="skip-back-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSkipBackFill);
const Memo = memo(ForwardRef);
export default Memo;