import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightbulbFilamentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lightbulb-filament-fill_svg__a)"><path fill="#000" d="M11 14.5a.5.5 0 0 1-.5.5h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 .5.5m2.5-8a5.47 5.47 0 0 1-2.102 4.326 1.01 1.01 0 0 0-.398.8V12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.375a1 1 0 0 0-.39-.791A5.47 5.47 0 0 1 2.5 6.53C2.484 3.552 4.891 1.07 7.868 1A5.5 5.5 0 0 1 13.5 6.5m-3.146.146a.5.5 0 0 0-.708 0L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708L7.5 9.207V11.5a.5.5 0 0 0 1 0V9.207l1.854-1.853a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="lightbulb-filament-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLightbulbFilamentFill);
const Memo = memo(ForwardRef);
export default Memo;