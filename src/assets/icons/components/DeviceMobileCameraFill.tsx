import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceMobileCameraFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#device-mobile-camera-fill_svg__a)"><path fill="#000" d="M11 1H5a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 5 15h6a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11 1M8 4.5A.75.75 0 1 1 8 3a.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="device-mobile-camera-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeviceMobileCameraFill);
const Memo = memo(ForwardRef);
export default Memo;