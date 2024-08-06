import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHOneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-one-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-4 8a.5.5 0 0 1-1 0V8H4.5v2a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0v2H8V5a.5.5 0 1 1 1 0zm3.5 1a.5.5 0 0 1-1 0V6.938l-.723.481a.5.5 0 0 1-.554-.832l1.5-1A.5.5 0 0 1 12.5 6z" /></g><defs><clipPath id="text-h-one-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHOneFill);
const Memo = memo(ForwardRef);
export default Memo;