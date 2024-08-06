import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-check-fill_svg__a)"><path fill="#000" d="M15.496 7.783C15.382 4.845 12.942 2.5 10.004 2.5A5.506 5.506 0 0 0 4.5 7.983a.51.51 0 0 1-.464.517A.5.5 0 0 1 3.5 8c0-.7.112-1.394.334-2.057a.25.25 0 0 0-.297-.324A4.006 4.006 0 0 0 .5 9.5c0 2.2 1.86 4 4.063 4H10a5.506 5.506 0 0 0 5.496-5.717m-3.142-.43-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.707L9 9.293l2.646-2.647a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="cloud-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudCheckFill);
const Memo = memo(ForwardRef);
export default Memo;