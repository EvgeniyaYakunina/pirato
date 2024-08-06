import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaintRollerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paint-roller-fill_svg__a)"><path fill="#000" d="M15.5 6.5v3.125a1.005 1.005 0 0 1-.725.961L8.5 12.375V14.5a.5.5 0 0 1-1 0v-2.125a1.004 1.004 0 0 1 .725-.961L14.5 9.625V6.5h-1V8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5H1a.5.5 0 0 1 0-1h1V4a1 1 0 0 1 1-1h9.5a1 1 0 0 1 1 1v1.5h1a1 1 0 0 1 1 1" /></g><defs><clipPath id="paint-roller-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaintRollerFill);
const Memo = memo(ForwardRef);
export default Memo;