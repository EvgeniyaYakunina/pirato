import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatteryPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#battery-plus-fill_svg__a)"><path fill="#000" d="M12.5 3.5H2A1.5 1.5 0 0 0 .5 5v6A1.5 1.5 0 0 0 2 12.5h10.5A1.5 1.5 0 0 0 14 11V5a1.5 1.5 0 0 0-1.5-1.5M9 8.5H7.75v1.25a.5.5 0 0 1-1 0V8.5H5.5a.5.5 0 1 1 0-1h1.25V6.25a.5.5 0 1 1 1 0V7.5H9a.5.5 0 1 1 0 1M16 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 1 0" /></g><defs><clipPath id="battery-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBatteryPlusFill);
const Memo = memo(ForwardRef);
export default Memo;