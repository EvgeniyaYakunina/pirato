import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMedalMilitaryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#medal-military-fill_svg__a)"><path fill="#000" d="M12.938 2.5H3.063A1.06 1.06 0 0 0 2 3.563v3.075a1.06 1.06 0 0 0 .625.967l3.912 1.778a3 3 0 1 0 2.93 0l3.908-1.778A1.06 1.06 0 0 0 14 6.638V3.563A1.06 1.06 0 0 0 12.938 2.5M6 3.5h4v4.542L8 8.95l-2-.91zM8 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4" /></g><defs><clipPath id="medal-military-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMedalMilitaryFill);
const Memo = memo(ForwardRef);
export default Memo;