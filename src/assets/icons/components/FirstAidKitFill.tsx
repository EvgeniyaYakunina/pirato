import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFirstAidKitFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#first-aid-kit-fill_svg__a)"><path fill="#000" d="M13.5 3.5H11V3a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 5 3v.5H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M9.5 9h-1v1a.5.5 0 0 1-1 0V9h-1a.5.5 0 1 1 0-1h1V7a.5.5 0 1 1 1 0v1h1a.5.5 0 1 1 0 1m.5-5.5H6V3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="first-aid-kit-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFirstAidKitFill);
const Memo = memo(ForwardRef);
export default Memo;