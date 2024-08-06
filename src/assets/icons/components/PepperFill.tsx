import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPepperFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pepper-fill_svg__a)"><path fill="#000" d="M10.454 2.526A2.5 2.5 0 0 0 8 .5a.5.5 0 1 0 0 1 1.5 1.5 0 0 1 1.428 1.041A4.005 4.005 0 0 0 6 6.5c0 2.922-1.61 4.875-4.783 5.813a1 1 0 0 0 .11 1.945c.94.163 1.891.243 2.845.242 2.548 0 5.385-.572 7.345-2.216C13.165 10.902 14 8.956 14 6.5a4.005 4.005 0 0 0-3.546-3.974M12 5.938l-1.776-.886a.5.5 0 0 0-.448 0L8 5.938l-.836-.418a3 3 0 0 1 5.672 0z" /></g><defs><clipPath id="pepper-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPepperFill);
const Memo = memo(ForwardRef);
export default Memo;