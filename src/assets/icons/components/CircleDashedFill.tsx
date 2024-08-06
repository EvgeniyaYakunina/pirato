import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircleDashedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circle-dashed-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.412 2.813a.5.5 0 0 1 .705.043 5.5 5.5 0 0 1 1.1 1.905.5.5 0 0 1-.948.317 4.5 4.5 0 0 0-.9-1.562.5.5 0 0 1 .043-.703M4.588 11.69a.5.5 0 0 1-.706-.044 5.5 5.5 0 0 1-1.1-1.905.5.5 0 0 1 .95-.317c.19.575.497 1.106.9 1.56a.5.5 0 0 1-.044.706m.043-6.675a4.5 4.5 0 0 0-.9 1.562.5.5 0 1 1-.948-.317 5.5 5.5 0 0 1 1.1-1.905.5.5 0 1 1 .75.663zM9.1 13.39a5.5 5.5 0 0 1-2.198 0 .5.5 0 0 1 .198-.98 4.5 4.5 0 0 0 1.802 0 .5.5 0 0 1 .198.98M9.49 3.203a.5.5 0 0 1-.59.388 4.5 4.5 0 0 0-1.801 0 .5.5 0 1 1-.199-.98 5.5 5.5 0 0 1 2.199 0 .5.5 0 0 1 .391.589zm3.727 6.543a5.5 5.5 0 0 1-1.1 1.904.502.502 0 0 1-.824-.112.5.5 0 0 1 .075-.55c.402-.454.708-.985.9-1.56a.5.5 0 0 1 .948.318z" /></g><defs><clipPath id="circle-dashed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircleDashedFill);
const Memo = memo(ForwardRef);
export default Memo;