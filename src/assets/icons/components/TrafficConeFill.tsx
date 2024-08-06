import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrafficConeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#traffic-cone-fill_svg__a)"><path fill="#000" d="M14.5 13h-1.144L9.589 2.172a1 1 0 0 0-.945-.672H7.356a1 1 0 0 0-.945.671L2.644 13H1.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1M5.964 6.5h4.072l1.043 3H4.921z" /></g><defs><clipPath id="traffic-cone-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrafficConeFill);
const Memo = memo(ForwardRef);
export default Memo;