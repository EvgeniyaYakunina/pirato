import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrossFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cross-fill_svg__a)"><path fill="#000" d="M13.5 5.75v1.5a1 1 0 0 1-1 1H9.75V14a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V8.25H3.5a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2.75V2a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v2.75h2.75a1 1 0 0 1 1 1" /></g><defs><clipPath id="cross-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCrossFill);
const Memo = memo(ForwardRef);
export default Memo;