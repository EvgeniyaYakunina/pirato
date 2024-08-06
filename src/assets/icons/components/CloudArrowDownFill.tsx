import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudArrowDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-arrow-down-fill_svg__a)"><path fill="#000" d="M15.496 7.783C15.382 4.845 12.942 2.5 10.004 2.5A5.506 5.506 0 0 0 4.5 7.983a.51.51 0 0 1-.464.517A.5.5 0 0 1 3.5 8c0-.7.112-1.394.334-2.057a.25.25 0 0 0-.297-.324A4.006 4.006 0 0 0 .5 9.5c0 2.2 1.86 4 4.063 4H10a5.506 5.506 0 0 0 5.496-5.717m-3.142 1.57-2 2a.503.503 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.707L9.5 9.793V6a.5.5 0 1 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="cloud-arrow-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudArrowDownFill);
const Memo = memo(ForwardRef);
export default Memo;