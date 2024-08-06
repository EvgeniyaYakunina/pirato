import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRadioFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#radio-fill_svg__a)"><path fill="#000" d="M13.5 4H5.407l6.737-2.02a.5.5 0 0 0-.288-.959l-10 3A.5.5 0 0 0 1.5 4.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-7 7H4a.5.5 0 0 1 0-1h2.5a.5.5 0 1 1 0 1m0-2H4a.5.5 0 1 1 0-1h2.5a.5.5 0 1 1 0 1m0-2H4a.5.5 0 1 1 0-1h2.5a.5.5 0 1 1 0 1m4 3.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" /></g><defs><clipPath id="radio-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRadioFill);
const Memo = memo(ForwardRef);
export default Memo;