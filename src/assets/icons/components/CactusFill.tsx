import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCactusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cactus-fill_svg__a)"><path fill="#000" d="M14 13.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h3V8.5H5a4.004 4.004 0 0 1-4-4A1.504 1.504 0 0 1 2.505 3h.025A1.47 1.47 0 0 1 4 4.47v.03a1 1 0 0 0 1 1h.5v-2a2.5 2.5 0 1 1 5 0V8h.5a1 1 0 0 0 1-1v-.03a1.47 1.47 0 0 1 1.47-1.47h.025A1.504 1.504 0 0 1 15 7a4.005 4.005 0 0 1-4 4h-.5v2h3a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="cactus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCactusFill);
const Memo = memo(ForwardRef);
export default Memo;