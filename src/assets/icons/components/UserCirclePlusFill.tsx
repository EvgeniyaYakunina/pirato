import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserCirclePlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-circle-plus-fill_svg__a)"><path fill="#000" d="M8 4.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M11 4h1v1a.5.5 0 0 0 1 0V4h1a.5.5 0 0 0 0-1h-1V2a.5.5 0 0 0-1 0v1h-1a.5.5 0 1 0 0 1m2.834 2.507a.5.5 0 0 0-.41.576q.076.456.076.917a5.48 5.48 0 0 1-1.39 3.65 5 5 0 0 0-1.36-1.331.25.25 0 0 0-.303.02 3.74 3.74 0 0 1-4.891 0 .25.25 0 0 0-.306-.02 5 5 0 0 0-1.362 1.332 5.5 5.5 0 0 1 5.03-9.075.5.5 0 0 0 .165-.986 6.495 6.495 0 1 0 5.327 5.328.5.5 0 0 0-.576-.411" /></g><defs><clipPath id="user-circle-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserCirclePlusFill);
const Memo = memo(ForwardRef);
export default Memo;