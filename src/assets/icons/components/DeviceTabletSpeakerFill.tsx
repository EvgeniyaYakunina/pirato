import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceTabletSpeakerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#device-tablet-speaker-fill_svg__a)"><path fill="#000" d="M12 1.5H4A1.5 1.5 0 0 0 2.5 3v10A1.5 1.5 0 0 0 4 14.5h8a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 12 1.5m-2 3H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="device-tablet-speaker-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDeviceTabletSpeakerFill);
const Memo = memo(ForwardRef);
export default Memo;