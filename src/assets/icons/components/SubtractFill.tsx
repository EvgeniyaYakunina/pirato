import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubtractFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#subtract-fill_svg__a)"><path fill="#000" d="M10.914 5.084a5 5 0 1 0-5.83 5.83 5 5 0 1 0 5.83-5.83M6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8" /></g><defs><clipPath id="subtract-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSubtractFill);
const Memo = memo(ForwardRef);
export default Memo;