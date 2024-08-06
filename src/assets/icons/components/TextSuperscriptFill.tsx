import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextSuperscriptFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-superscript-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5.09 9.213a.5.5 0 1 1-.82.574L5.75 9.875l-1.34 1.912a.5.5 0 1 1-.82-.574L5.14 9 3.59 6.787a.5.5 0 1 1 .82-.574l1.34 1.915 1.34-1.915a.5.5 0 0 1 .82.574L6.36 9zM12 10H9.5a.5.5 0 0 1-.4-.8l2.25-3a.749.749 0 0 0-.7-1.204.75.75 0 0 0-.497.3.8.8 0 0 0-.161.3.5.5 0 1 1-.98-.198 1.76 1.76 0 1 1 3.137 1.403L10.5 9H12a.5.5 0 0 1 0 1" /></g><defs><clipPath id="text-superscript-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextSuperscriptFill);
const Memo = memo(ForwardRef);
export default Memo;