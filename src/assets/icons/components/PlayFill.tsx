import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlayFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#play-fill_svg__a)"><path fill="#000" d="M15 8a.98.98 0 0 1-.475.844L5.52 14.353A1 1 0 0 1 4 13.508V2.492A.99.99 0 0 1 5.016 1.5a1 1 0 0 1 .504.147l9.005 5.508A.98.98 0 0 1 15 8" /></g><defs><clipPath id="play-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlayFill);
const Memo = memo(ForwardRef);
export default Memo;