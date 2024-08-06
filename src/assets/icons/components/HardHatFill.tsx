import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHardHatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hard-hat-fill_svg__a)"><path fill="#000" d="M9.5 9.5h-3v-7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm4.5 1H2a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1m0-1.25V8.5a6.03 6.03 0 0 0-3.132-5.27.25.25 0 0 0-.368.221V9.5h3.25a.25.25 0 0 0 .25-.25M2.25 9.5H5.5V3.451a.25.25 0 0 0-.368-.22A6.03 6.03 0 0 0 2 8.5v.75a.25.25 0 0 0 .25.25" /></g><defs><clipPath id="hard-hat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHardHatFill);
const Memo = memo(ForwardRef);
export default Memo;