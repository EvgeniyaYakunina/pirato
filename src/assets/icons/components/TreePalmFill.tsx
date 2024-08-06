import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTreePalmFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tree-palm-fill_svg__a)"><path fill="#000" d="M14.99 3.77a.5.5 0 0 1-.29.36l-3.512 1.53a4.46 4.46 0 0 1 2.71 2.075 4.41 4.41 0 0 1 .45 3.395.5.5 0 0 1-.786.268L8.5 7.543V14a.5.5 0 1 1-1 0V7.543l-5.063 3.855a.5.5 0 0 1-.785-.268 4.42 4.42 0 0 1 .45-3.395 4.46 4.46 0 0 1 2.71-2.076L1.301 4.13a.5.5 0 0 1-.163-.803 4.18 4.18 0 0 1 6.109 0c.3.316.552.674.75 1.062.198-.388.452-.746.753-1.062a4.18 4.18 0 0 1 6.109 0 .5.5 0 0 1 .131.444" /></g><defs><clipPath id="tree-palm-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTreePalmFill);
const Memo = memo(ForwardRef);
export default Memo;