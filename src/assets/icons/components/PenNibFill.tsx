import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPenNibFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pen-nib-fill_svg__a)"><path fill="#000" d="M15.207 5.085 10.914.792a1 1 0 0 0-1.414 0L7.722 2.57 4.097 3.93a1 1 0 0 0-.637.772l-1.298 7.787a.25.25 0 0 0 .423.218l3.562-3.562a1.5 1.5 0 1 1 .707.707l-3.562 3.563a.25.25 0 0 0 .218.423l7.788-1.298a1 1 0 0 0 .772-.635l1.36-3.63L15.208 6.5a1 1 0 0 0 0-1.414zM13 7.292 8.707 3l1.5-1.5L14.5 5.792z" /></g><defs><clipPath id="pen-nib-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPenNibFill);
const Memo = memo(ForwardRef);
export default Memo;