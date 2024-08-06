import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSelectionInverseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#selection-inverse-fill_svg__a)"><path fill="#000" d="M9.5 13.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-7-4A.5.5 0 0 0 3 9V7a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5m2 3.5H3v-1.5a.5.5 0 0 0-1 0V13a1 1 0 0 0 1 1h1.5a.5.5 0 0 0 0-1M14 3a1 1 0 0 0-1-1H3a1 1 0 0 0-.743.334A1 1 0 0 0 2 3v1.5a.5.5 0 1 0 1 0v-.793L12.293 13H11.5a.5.5 0 0 0 0 1H13a1 1 0 0 0 .743-.334A1 1 0 0 0 14 13z" /></g><defs><clipPath id="selection-inverse-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSelectionInverseFill);
const Memo = memo(ForwardRef);
export default Memo;