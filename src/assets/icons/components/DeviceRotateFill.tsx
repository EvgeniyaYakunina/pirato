import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceRotateFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#device-rotate-fill_svg__a)"><path fill="#000" d="m12.854 13.854-1.5 1.5A.501.501 0 0 1 10.5 15v-1H5a1.5 1.5 0 0 1-1.5-1.5v-6a.5.5 0 1 1 1 0v6a.5.5 0 0 0 .5.5h5.5v-1a.5.5 0 0 1 .854-.354l1.5 1.5a.5.5 0 0 1 0 .708M5 4.5a.5.5 0 0 0 .5-.5V3H11a.5.5 0 0 1 .5.5v6a.5.5 0 0 0 1 0v-6A1.5 1.5 0 0 0 11 2H5.5V1a.5.5 0 0 0-.854-.354l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5A.5.5 0 0 0 5 4.5" /></g><defs><clipPath id="device-rotate-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeviceRotateFill);
const Memo = memo(ForwardRef);
export default Memo;