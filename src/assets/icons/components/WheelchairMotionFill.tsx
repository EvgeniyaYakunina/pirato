import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWheelchairMotionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wheelchair-motion-fill_svg__a)"><path fill="#000" d="M9 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0m1 7a.5.5 0 0 0-.5.5 3 3 0 1 1-3-3 .5.5 0 0 0 0-1 4 4 0 1 0 4 4 .5.5 0 0 0-.5-.5m2.5-2H8.864l1.07-1.861a.5.5 0 0 0-.161-.668 6 6 0 0 0-7.091.404.5.5 0 1 0 .636.77 5.01 5.01 0 0 1 5.5-.572L7.566 8.25A.5.5 0 0 0 8 9h3.89l-.88 4.402a.5.5 0 0 0 .98.196l1-5A.5.5 0 0 0 12.5 8" /></g><defs><clipPath id="wheelchair-motion-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWheelchairMotionFill);
const Memo = memo(ForwardRef);
export default Memo;