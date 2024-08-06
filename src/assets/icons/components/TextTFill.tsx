import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextTFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-t-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 4a.5.5 0 0 1-1 0v-.5h-2V11h.75a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1h.75V5.5h-2V6a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="text-t-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextTFill);
const Memo = memo(ForwardRef);
export default Memo;