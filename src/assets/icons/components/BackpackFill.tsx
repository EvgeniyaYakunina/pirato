import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBackpackFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#backpack-fill_svg__a)"><path fill="#000" d="M10.5 2.536V2A1.5 1.5 0 0 0 9 .5H7A1.5 1.5 0 0 0 5.5 2v.536A3.506 3.506 0 0 0 2.5 6v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6a3.506 3.506 0 0 0-3-3.464M6.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5h-3zM7 4.5h2a.5.5 0 1 1 0 1H7a.5.5 0 1 1 0-1m4 9H5V11h3.5v.5a.5.5 0 0 0 1 0V11H11zm0-3.5H5v-.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" /></g><defs><clipPath id="backpack-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBackpackFill);
const Memo = memo(ForwardRef);
export default Memo;