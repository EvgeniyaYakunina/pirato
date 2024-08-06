import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudWarningFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-warning-fill_svg__a)"><path fill="#000" d="M15.496 7.783C15.382 4.845 12.942 2.5 10.004 2.5A5.506 5.506 0 0 0 4.5 7.983a.51.51 0 0 1-.464.517A.5.5 0 0 1 3.5 8c0-.7.112-1.394.334-2.057a.25.25 0 0 0-.297-.324A4.006 4.006 0 0 0 .5 9.5c0 2.2 1.86 4 4.063 4H10a5.506 5.506 0 0 0 5.496-5.717M9.5 5.5a.5.5 0 1 1 1 0V8a.5.5 0 0 1-1 0zM10 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="cloud-warning-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudWarningFill);
const Memo = memo(ForwardRef);
export default Memo;