import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotchesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#notches-fill_svg__a)"><path fill="#000" d="M12.5 2.5V12a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.354-.854l9.5-9.5a.5.5 0 0 1 .854.354" /></g><defs><clipPath id="notches-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotchesFill);
const Memo = memo(ForwardRef);
export default Memo;