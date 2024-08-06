import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignCenterVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-center-vertical-fill_svg__a)"><path fill="#000" d="M14.5 8a.5.5 0 0 1-.5.5h-1v3a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1v-3h-1V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5H2a.5.5 0 1 1 0-1h1V3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v4.5h1v-3a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1v3h1a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="align-center-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignCenterVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;