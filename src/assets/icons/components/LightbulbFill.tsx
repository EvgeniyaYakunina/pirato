import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightbulbFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lightbulb-fill_svg__a)"><path fill="#000" d="M11 14.5a.5.5 0 0 1-.5.5h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 .5.5m2.5-8a5.47 5.47 0 0 1-2.102 4.326 1.01 1.01 0 0 0-.398.8V12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.375a1 1 0 0 0-.39-.791A5.47 5.47 0 0 1 2.5 6.53C2.484 3.552 4.891 1.07 7.868 1A5.5 5.5 0 0 1 13.5 6.5m-2.007-.584a3.6 3.6 0 0 0-2.91-2.909.5.5 0 1 0-.166.986c1.036.175 1.914 1.053 2.09 2.09a.5.5 0 1 0 .986-.167" /></g><defs><clipPath id="lightbulb-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLightbulbFill);
const Memo = memo(ForwardRef);
export default Memo;